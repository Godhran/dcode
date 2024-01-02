import React from "react";
import "./../../styles/css/loading.css";
import colours from "../../styles/colours";

const size = 35;

const LoadingOverlay = () => {
  return (
    <div className={"loading-overlay"}>
      <div className={"loading-animation"} style={{maxWidth:'80vw'}}>
        <div className="pt-5">
          <p>
            This project uses <a href="https://render.com/">Render.com</a> and may take some time for the free
            server instance to start up
          </p>
        </div>
        <svg
          className={`mr-1 mb-1 loading-element`}
          height={size}
          width={size}
          viewBox={`0 0 30 30`}
          style={{ animationDelay: `${0.1}s` }}
        >
          <rect height={30} width={30} rx={10} fill={"#FFFFFF"} />
          <text
            x={"50%"}
            fontWeight={900}
            fontFamily={"Major Mono Display"}
            y={"50%"}
            textAnchor={"middle"}
            fontSize={20}
            alignmentBaseline={"central"}
            fill={colours.palettes["a"].backgroundColor}
          >
            {"."}
          </text>
        </svg>

        <svg
          className={`mr-1 mb-1 loading-element`}
          height={size}
          width={size}
          viewBox={`0 0 30 30`}
          style={{ animationDelay: `${0.2}s` }}
        >
          <rect height={30} width={30} rx={10} fill={"#FFFFFF"} />
          <text
            x={"50%"}
            fontWeight={900}
            fontFamily={"Major Mono Display"}
            y={"50%"}
            textAnchor={"middle"}
            fontSize={20}
            alignmentBaseline={"central"}
            fill={colours.palettes["a"].backgroundColor}
          >
            {"."}
          </text>
        </svg>

        <svg
          className={`mb-1 loading-element`}
          height={size}
          width={size}
          viewBox={`0 0 30 30`}
          style={{ animationDelay: `${0.3}s` }}
        >
          <rect height={30} width={30} rx={10} fill={"#FFFFFF"} />
          <text
            x={"50%"}
            fontWeight={900}
            fontFamily={"Major Mono Display"}
            y={"50%"}
            textAnchor={"middle"}
            fontSize={20}
            alignmentBaseline={"central"}
            fill={colours.palettes["a"].backgroundColor}
          >
            {"."}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default LoadingOverlay;
