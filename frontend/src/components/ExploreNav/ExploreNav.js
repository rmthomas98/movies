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
        to="genre/action"
        state={{genre: 'action'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Action
      </NavLink>
      <NavLink
        to="genre/animation"
        state={{genre: 'animation'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Animation
      </NavLink>
      <NavLink
        to="genre/biography"
        state={{genre: 'biography'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Biography
      </NavLink>
      <NavLink
        to="genre/comedy"
        state={{genre: 'comedy'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Comedy
      </NavLink>
      <NavLink
        to="genre/crime"
        state={{genre: 'crime'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Crime
      </NavLink>
      <NavLink
        to="genre/documentary"
        state={{genre: 'documentary'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Documentary
      </NavLink>
      <NavLink
        to="genre/drama"
        state={{genre: 'drama'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Drama
      </NavLink>
      <NavLink
        to="genre/family"
        state={{genre: 'family'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Family
      </NavLink>
      <NavLink
        to="genre/fantasy"
        state={{genre: 'fantasy'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Fantasy
      </NavLink>
      <NavLink
        to="genre/film-noir"
        state={{genre: 'film-noir'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Film Noir
      </NavLink>
      <NavLink
        to="genre/history"
        state={{genre: 'history'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        History
      </NavLink>
      <NavLink
        to="genre/horror"
        state={{genre: 'horror'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Horror
      </NavLink>
      <NavLink
        to="genre/music"
        state={{genre: 'music'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Music
      </NavLink>
      <NavLink
        to="genre/musical"
        state={{genre: 'musical'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Musical
      </NavLink>
      <NavLink
        to="genre/mystery"
        state={{genre: 'mystery'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Mystery
      </NavLink>
      <NavLink
        to="genre/romance"
        state={{genre: 'romance'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Romance
      </NavLink>
      <NavLink
        to="genre/sci-fi"
        state={{genre: 'sci-fi'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Science Fiction
      </NavLink>
      <NavLink
        to="genre/sport"
        state={{genre: 'sport'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Sport
      </NavLink>
      <NavLink
        to="genre/thriller"
        state={{genre: 'thriller'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        Thriller
      </NavLink>
      <NavLink
        to="genre/war"
        state={{genre: 'war'}}
        className={(data) =>
          data.isActive ? styles.navLinkActive : styles.navLink
        }
      >
        War
      </NavLink>
      <NavLink
        to="genre/western"
        state={{genre: 'western'}}
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
