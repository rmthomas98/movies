import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ExploreNav.module.css";

const ExploreNav = () => {
  return (
    <div className={styles.container}>
      <p className={styles.navTitle}>Top Lists</p>
      <NavLink
        to="popular"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Most Popular
      </NavLink>
      <NavLink
        to="top-rated"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Top Rated
      </NavLink>
      <NavLink
        to="picture-winners"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Best Picture Winners
      </NavLink>
      <NavLink
        to="coming-soon"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Coming Soon
      </NavLink>
      <p className={styles.navTitle}>Genres</p>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Action
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Animation
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Biography
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Comedy
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Crime
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Documentary
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Drama
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Family
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Fantasy
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Film Noir
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        History
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Horror
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Music
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Musical
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Mystery
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Romance
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Science Fiction
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Sport
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Thriller
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        War
      </NavLink>
      <NavLink
        to="/"
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Western
      </NavLink>
    </div>
  );
};

export default ExploreNav;
