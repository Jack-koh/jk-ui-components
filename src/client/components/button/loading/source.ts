const source = {
  jsx: `import React from "react";
import { Button } from "lib/module/lib";
import { LoadingCircle } from "lib/module/lib/Icons";
import { Ex } from "client/layout";
import source from "./source";

export function Loading() {
  const [loading, setLoading] = React.useState(true);

  return (
    <Ex source={source}>
      <React.Fragment>
        <Button
          st={{ borderRadius: 18, backgroundColor: "#2e7d32" }}
          onClick={() => setLoading(!loading)}>
          {"Toggle " + loading}
        </Button>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}>
          <Button loading={loading} />

          <Button loading={loading && "Loading..."} />

          <Button loading={loading} loadingIcon={<LoadingCircle />} />
        </div>
      </React.Fragment>
    </Ex>
  );
}`,
};

export default source;
