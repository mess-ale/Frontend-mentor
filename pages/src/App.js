import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import im from "./images/image-omelette.jpeg";
import Tb from "./component/Teblesss";

function App() {
  return (
    <Stack
      padding={{xs: '0rem',  md: "5rem 0rem 5rem 0rem"}}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        width={{xs: '100%', md: "55%"}}
        sx={{ backgroundColor: "hsl(0, 0%, 100%)", borderRadius: {xs: '0rem', md: "0.7rem"} }}
        padding={{xs: '0rem', md: "2.7rem"}}
      >
        <Stack>
          <img
            style={{
              borderRadius: {xs: '0rem', md: "0.7rem"},
            }}
            src={im}
            alt="mentor"
          />
        </Stack>
        <Stack>
          <Typography
            sx={{
              padding: "0.7rem 0rem 0.7rem 0rem",
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "Young Serif",
            }}
          >
            Simple Omelette Recipe
          </Typography>
          <Typography sx={{ fontFamily: "Outfit", color: "hsl(30, 10%, 34%)" }}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </Typography>
        </Stack>
        <Stack sx={{ padding: "2rem 0rem 2rem 0rem" }}>
          <Stack
            sx={{ backgroundColor: "hsl(330, 100%, 98%)", padding: "1rem" }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "hsl(332, 51%, 32%)",
                fontSize: "22px",
              }}
            >
              Preparation time
            </Typography>
            <ul
              style={{
                color: "hsl(30, 10%, 34%)",
                fontSize: "18px",
                fontFamily: "Outfit",
              }}
            >
              <li style={{ paddingBottom: "0.5rem", paddingLeft: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Total:</span> Approximately
                10 minutes
              </li>
              <li style={{ paddingBottom: "0.5rem", paddingLeft: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Preparation:</span> 5
                minutes
              </li>
              <li style={{ paddingBottom: "0.5rem", paddingLeft: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Cooking:</span> 5 minutes
              </li>
            </ul>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "hsl(332, 51%, 32%)",
              fontSize: "22px",
              fontFamily: "Young Serif",
            }}
          >
            Ingredients
          </Typography>
          <ul style={{ color: "hsl(30, 10%, 34%)" }}>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",
                paddingLeft: "1.4rem",
              }}
            >
              2-3 large eggs
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",

                paddingLeft: "1.4rem",
              }}
            >
              Salt, to taste
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",

                paddingLeft: "1.4rem",
              }}
            >
              Pepper, to taste
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",

                paddingLeft: "1.4rem",
              }}
            >
              1 tablespoon of butter or oil
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",
                paddingLeft: "1.4rem",
              }}
            >
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </Stack>

        <Divider sx={{ padding: "1rem" }} />

        <Stack sx={{ paddingTop: "2rem" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "hsl(332, 51%, 32%)",
              fontSize: "22px",
              fontFamily: "Young Serif",
            }}
          >
            Instructions
          </Typography>
          <ol style={{ color: "hsl(30, 10%, 34%)" }}>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",
                paddingLeft: "1.4rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Beat the eggs:</span>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",
                paddingLeft: "1.4rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Heat the pan:</span>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",

                paddingLeft: "1.4rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Cook the omelette:</span>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",

                paddingLeft: "1.4rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Add fillings (optional):
              </span>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",

                paddingLeft: "1.4rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Fold and serve:</span>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li
              style={{
                paddingBottom: "0.5rem",
                fontSize: "18px",
                fontFamily: "Outfit",
                paddingLeft: "1.4rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Enjoy:</span>
              Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </Stack>
        <Divider sx={{ padding: "1rem" }} />

        <Stack sx={{ padding: '2rem 0rem 0rem 0rem'}}>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "hsl(332, 51%, 32%)",
              fontSize: "28px",
              paddingBottom: '1rem',
              fontFamily: "Young Serif",
            }}
          >
            Nutrition
          </Typography>
          <Typography sx={{ fontFamily: "Outfit", fontSize: '19px', color: "hsl(30, 10%, 34%)" }}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </Typography>
          <Stack paddingTop={'2rem'}>

          </Stack>
          <Tb />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
