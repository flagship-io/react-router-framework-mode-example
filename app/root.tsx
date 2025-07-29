// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Nav from "./components/Nav";
import { getFsVisitorData } from "./helpers/flagship";
import FlagshipProvider, {
  LogLevel,
  type SerializedFlagMetadata,
} from "@flagship.io/react-sdk";

// Loader function to fetch initial flag data for the visitor before rendering the app
export async function loader({ params }: Route.LoaderArgs) {
  const visitor = await getFsVisitorData({
    visitorId: "visitorId",
    context: {
      key: "value",
    },
    hasConsented: true,
  });
  return visitor.getFlags().toJSON();
}

// Layout component wraps the app with FlagshipProvider and sets up the HTML structure
export function Layout({ children }: { children: React.ReactNode }) {
  // Get initial flags data from the loader
  const initialFlagsData = useRouteLoaderData<SerializedFlagMetadata[]>("root");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <FlagshipProvider
          envId={import.meta.env.VITE_ENV_ID}
          apiKey={import.meta.env.VITE_API_KEY}
          logLevel={LogLevel.DEBUG}
          initialFlagsData={initialFlagsData}
          visitorData={{
            id: "visitorId",
            hasConsented: true,
            context: {
              key: "value",
            },
          }}
        >
          <div className={"container"}>
            <div className="nav">
              <Nav />
            </div>
            <main className={"main"}>{children}</main>
          </div>

          <ScrollRestoration />
          <Scripts />
        </FlagshipProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
