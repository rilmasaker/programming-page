import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "../src/Link";
import Image from "next/image";

export default function Index() {
  return (
    <Grid container>
      <Grid item xs={6} sm={6}>
        <div className={"image-container"}>
          <Image
            className="image"
            // loader={myLoader}
            src="/reactPhoto1.jpg"
            alt="react picrure"
            layout="fill"
          />
        </div>
      </Grid>
      <Grid item xs={6} sm={6} sx={{ color: "info.main" }}>
        {[...new Array(18)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Grid>
    </Grid>
  );
}
