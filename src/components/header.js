import { Flex, Box } from "theme-ui"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"
const Header = () => {
  return (
    <Box>
      <Flex
        sx={{
          margin: `0 auto`,
          width: "100%",
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          sx={{
            color: "inherit",
            "&.active": {
              color: "primary",
            },
            textDecoration: "none",
            fontSize: [2],
            fontWeight: "bold",
          }}
        >
          NextTrace
        </Link>
        <Link
          to="/about"
          sx={{
            color: "inherit",
            "&.active": {
              color: "primary",
            },
            textDecoration: "none",
            fontSize: [2],
            fontWeight: "bold",
          }}
        >
          About
        </Link>
      </Flex>
    </Box>
  )
}

export default Header

//<Box>About</Box>
