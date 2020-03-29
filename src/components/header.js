/** @jsx jsx */
import { Flex, Box } from "theme-ui"
import { Link } from "gatsby"
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
        <Box>
          <Link
            to="/about"
            sx={{
              color: "inherit",
              "&.active": {
                color: "primary",
              },
              textDecoration: "none",
              fontSize: [2],
              fontWeight: "bold"
            }}
          >
            What we do
          </Link>
          <Link
            to="/team"
            sx={{
              color: "inherit",
              "&.active": {
                color: "primary",
              },
              textDecoration: "none",
              fontSize: [2],
              fontWeight: "bold",
              ml: [3],
              mr: [3]
            }}
          >
            Who we are
          </Link>
          <Link
            to="/faq"
            sx={{
              color: "inherit",
              "&.active": {
                color: "primary",
              },
              textDecoration: "none",
              fontSize: [2],
              fontWeight: "bold",
              mr: [3]
            }}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
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
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
