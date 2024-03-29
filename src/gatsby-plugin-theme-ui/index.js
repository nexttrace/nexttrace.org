export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: "#fff",
    primary: "#62B0FA",
    secondary: "#f3d160",
    muted: "#fbaf86",
  },
  links: {
    nav: {
      color: "inherit",
      "&.active": {
        color: "primary",
      },
      "&:hover": {
        color: "primary"
      },
      textDecoration: "none",
      fontSize: [2],
      fontWeight: "bold",
      cursor: "pointer"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "primary",
      "&:active": {
        color: "primary",
      },
      "&:hover": {
        color: "primary",
        borderBottom: "solid",
        borderWidth: 2,
        borderColor: "primary"
      },
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer"
    }
  },
}
