import React, { useReducer, useState, useRef } from "react";
import styles from "./Nav.module.css";
import { House, Film, Binoculars } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search/Search";
import OutsideClickHandler from "react-outside-click-handler";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const dropDownNavSelector = useRef();

  const handleOutsideClick = (e) => {
    if (e.target === dropDownNavSelector.current) return;
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Film className={styles.film} color="#d31027" />
          <Link to="/" className={styles.title}>
            MovieExplorer
          </Link>
        </div>
        <Search />
        <div className={styles.navLinks}>
          <NavLink to="/" className={styles.navLink}>
            <House style={{ position: "relative", top: 1 }} />
          </NavLink>
          <NavLink to="/explore/popular" className={styles.navLink}>
            <Binoculars style={{ position: "relative", top: 1 }} />
          </NavLink>
          <div
            ref={dropDownNavSelector}
            className={styles.DropDownNavContainer}
            onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
          >
            <div
              className={`${styles.bar} ${isActive && styles.barOneActive}`}
            ></div>
            <div
              className={`${styles.bar} ${isActive && styles.barTwoActive}`}
            ></div>
            <div
              className={`${styles.bar} ${isActive && styles.barThreeActive}`}
            ></div>
          </div>
        </div>
        {/* <div
        className={styles.dropDownMenuWrapper}
        style={
          isActive
            ? { transform: "scaleY(1)", opacity: 1 }
            : { transform: "scaleY(0)", opacity: 0 }
        }
      > */}
        <OutsideClickHandler
          display="contents"
          onOutsideClick={handleOutsideClick}
        >
          <div
            className={styles.dropDownMenuContainer}
            style={
              isActive
                ? { transform: "scaleY(1)", opacity: 1 }
                : { transform: "scaleY(0)", opacity: 0 }
            }
          >
            <div
              className={styles.mainLinksContainer}
              style={isActive ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className={styles.navTitle}>Quick Links</p>
              <NavLink
                to="/"
                className={(data) =>
                  data.isActive
                    ? styles.dropDownNavLinkActive
                    : styles.dropDownNavLink
                }
                onClick={() => setIsActive(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/explore/popular"
                className={styles.dropDownNavLink}
                onClick={() => setIsActive(false)}
              >
                Explore Movies
              </NavLink>
            </div>
            <div
              className={styles.topListsContainer}
              style={isActive ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className={styles.navTitle}>Top Lists</p>
              <NavLink
                to="/explore/popular"
                className={(data) =>
                  data.isActive
                    ? styles.dropDownNavLinkActive
                    : styles.dropDownNavLink
                }
                onClick={() => setIsActive(false)}
              >
                Most Popular
              </NavLink>
              <NavLink
                to="/explore/top-rated"
                className={(data) =>
                  data.isActive
                    ? styles.dropDownNavLinkActive
                    : styles.dropDownNavLink
                }
                onClick={() => setIsActive(false)}
              >
                Top Rated
              </NavLink>
              <NavLink
                to="/explore/picture-winners"
                className={(data) =>
                  data.isActive
                    ? styles.dropDownNavLinkActive
                    : styles.dropDownNavLink
                }
                onClick={() => setIsActive(false)}
              >
                Best Picture Winners
              </NavLink>
              <NavLink
                to="/explore/coming-soon"
                className={(data) =>
                  data.isActive
                    ? styles.dropDownNavLinkActive
                    : styles.dropDownNavLink
                }
                onClick={() => setIsActive(false)}
              >
                Coming Soon
              </NavLink>
            </div>
            <div className={styles.genresContainer}>
              <p className={styles.navTitle}>Genres</p>
              <div className={styles.genreFlexContainer}>
                <div className={styles.genreLinksContainer}>
                  <NavLink
                    to="/explore/genre/action"
                    state={{ genre: "action" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Action
                  </NavLink>
                  <NavLink
                    to="/explore/genre/animation"
                    state={{ genre: "animation" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Animation
                  </NavLink>
                  <NavLink
                    to="/explore/genre/biography"
                    state={{ genre: "biography" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Biography
                  </NavLink>
                  <NavLink
                    to="/explore/genre/comedy"
                    state={{ genre: "comedy" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Comedy
                  </NavLink>
                  <NavLink
                    to="/explore/genre/crime"
                    state={{ genre: "crime" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Crime
                  </NavLink>
                  <NavLink
                    to="/explore/genre/documentary"
                    state={{ genre: "documentary" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Documentary
                  </NavLink>
                  <NavLink
                    to="/explore/genre/drama"
                    state={{ genre: "drama" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Drama
                  </NavLink>
                  <NavLink
                    to="/explore/genre/family"
                    state={{ genre: "family" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Family
                  </NavLink>
                  <NavLink
                    to="/explore/genre/fantasy"
                    state={{ genre: "fantasy" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Fantasy
                  </NavLink>
                  <NavLink
                    to="/explore/genre/film-noir"
                    state={{ genre: "film-noir" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Film Noir
                  </NavLink>
                  <NavLink
                    to="/explore/genre/history"
                    state={{ genre: "history" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    History
                  </NavLink>
                </div>
                <div className={styles.genreLinksContainer}>
                  <NavLink
                    to="/explore/genre/horror"
                    state={{ genre: "horror" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Horror
                  </NavLink>
                  <NavLink
                    to="/explore/genre/music"
                    state={{ genre: "music" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Music
                  </NavLink>
                  <NavLink
                    to="/explore/genre/musical"
                    state={{ genre: "musical" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Musical
                  </NavLink>
                  <NavLink
                    to="/explore/genre/mystery"
                    state={{ genre: "mystery" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Mystery
                  </NavLink>
                  <NavLink
                    to="/explore/genre/romance"
                    state={{ genre: "romance" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Romance
                  </NavLink>
                  <NavLink
                    to="/explore/genre/sci-fi"
                    state={{ genre: "sci-fi" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Science Fiction
                  </NavLink>
                  <NavLink
                    to="/explore/genre/sport"
                    state={{ genre: "sport" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Sport
                  </NavLink>
                  <NavLink
                    to="/explore/genre/thriller"
                    state={{ genre: "thriller" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Thriller
                  </NavLink>
                  <NavLink
                    to="/explore/genre/war"
                    state={{ genre: "war" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    War
                  </NavLink>
                  <NavLink
                    to="/explore/genre/western"
                    state={{ genre: "western" }}
                    className={(data) =>
                      data.isActive
                        ? styles.dropDownNavLinkActive
                        : styles.dropDownNavLink
                    }
                    onClick={() => setIsActive(false)}
                  >
                    Western
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Nav;
