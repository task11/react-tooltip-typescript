import { Tooltip } from "./components/Tooltip";
import ConfirmTooltip from "./components/ConfirmTooltip";

import "./App.css";

export default function App() {
  return (
    <div className="container-layout">
      <section className="demo-section" aria-label="demo section">
        <div className="demo-direction">
          <div className="direction">
            <div className="top-wrapper">
              <Tooltip
                direction="topLeft"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">TL</button>
              </Tooltip>
              <Tooltip
                direction="top"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">Top</button>
              </Tooltip>
              <Tooltip
                direction="topRight"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">TR</button>
              </Tooltip>
            </div>
            <div className="center-wrapper">
              <div className="left-wrapper">
                <Tooltip
                  direction="leftTop"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">LT</button>
                </Tooltip>
                <Tooltip
                  direction="left"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">Left</button>
                </Tooltip>
                <Tooltip
                  direction="leftBottom"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">LB</button>
                </Tooltip>
              </div>
              <div className="right-wrapper">
                <Tooltip
                  direction="rightTop"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">RT</button>
                </Tooltip>
                <Tooltip
                  direction="right"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">Right</button>
                </Tooltip>
                <Tooltip
                  direction="rightBottom"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">RB</button>
                </Tooltip>
              </div>
            </div>
            <div className="bottom-wrapper">
              <Tooltip
                direction="bottomLeft"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">BL</button>
              </Tooltip>
              <Tooltip
                direction="bottom"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">Bottom</button>
              </Tooltip>
              <Tooltip
                direction="bottomRight"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">BR</button>
              </Tooltip>
            </div>
          </div>
          <div className="direction-parent-overflow">
            <div className="top-wrapper">
              <Tooltip
                direction="topLeft"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">TL</button>
              </Tooltip>
              <Tooltip
                direction="top"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">Top</button>
              </Tooltip>
              <Tooltip
                direction="topRight"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">TR</button>
              </Tooltip>
            </div>
            <div className="center-wrapper">
              <div className="left-wrapper">
                <Tooltip
                  direction="leftTop"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">LT</button>
                </Tooltip>
                <Tooltip
                  direction="left"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">Left</button>
                </Tooltip>
                <Tooltip
                  direction="leftBottom"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">LB</button>
                </Tooltip>
              </div>
              <div className="right-wrapper">
                <Tooltip
                  direction="rightTop"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">RT</button>
                </Tooltip>
                <Tooltip
                  direction="right"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">Right</button>
                </Tooltip>
                <Tooltip
                  direction="rightBottom"
                  title={
                    <>
                      <span>prompt test</span>
                      <span>prompt test</span>
                      <span>prompt test</span>
                    </>
                  }
                >
                  <button className="test-button">RB</button>
                </Tooltip>
              </div>
            </div>
            <div className="bottom-wrapper">
              <Tooltip
                direction="bottomLeft"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">BL</button>
              </Tooltip>
              <Tooltip
                direction="bottom"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">Bottom</button>
              </Tooltip>
              <Tooltip
                direction="bottomRight"
                title={
                  <>
                    <span>prompt test</span>
                    <span>prompt test</span>
                    <span>prompt test</span>
                  </>
                }
              >
                <button className="test-button">BR</button>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="demo-delay">
          <Tooltip
            direction="topLeft"
            enterDelay={1000}
            title={
              <>
                <span>prompt test</span>
                <span>prompt test</span>
                <span>prompt test</span>
              </>
            }
          >
            <button className="test-button">enter-delay 1s</button>
          </Tooltip>
          <Tooltip
            direction="top"
            leaveDelay={1000}
            title={
              <>
                <span>prompt test</span>
                <span>prompt test</span>
                <span>prompt test</span>
              </>
            }
          >
            <button className="test-button">leave-delay 1s</button>
          </Tooltip>
          <Tooltip
            direction="topRight"
            hoverNotHidden={true}
            title={
              <>
                <span>prompt test</span>
                <span>prompt test</span>
                <span>prompt test</span>
              </>
            }
          >
            <button className="test-button">hover not hidden</button>
          </Tooltip>
        </div>
        <div className="demo-custom-direction">
          <div className="top-wrapper">
            <Tooltip
              direction="top"
              hoverNotHidden
              title={<ConfirmTooltip />}
              classes={{
                tooltip: {
                  backgroundColor: "#fff",
                  color: "#999",
                  padding: "16px 24px",
                },
                arrow: {
                  backgroundColor: "#fff",
                },
              }}
            >
              <button className="test-button">Top</button>
            </Tooltip>
          </div>
          <div className="center-wrapper">
            <div className="left-wrapper">
              <Tooltip
                direction="left"
                hoverNotHidden
                title={<ConfirmTooltip />}
                classes={{
                  tooltip: {
                    backgroundColor: "#fff",
                    color: "#999",
                    padding: "16px 24px",
                  },
                  arrow: {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <button className="test-button">Left</button>
              </Tooltip>
            </div>
            <div className="right-wrapper">
              <Tooltip
                direction="right"
                hoverNotHidden
                title={<ConfirmTooltip />}
                classes={{
                  tooltip: {
                    backgroundColor: "#fff",
                    color: "#999",
                    padding: "16px 24px",
                  },
                  arrow: {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <button className="test-button">Right</button>
              </Tooltip>
            </div>
          </div>
          <div className="bottom-wrapper">
            <Tooltip
              direction="bottom"
              hoverNotHidden
              title={<ConfirmTooltip />}
              classes={{
                tooltip: {
                  backgroundColor: "#fff",
                  color: "#999",
                  padding: "16px 24px",
                },
                arrow: {
                  backgroundColor: "#fff",
                },
              }}
            >
              <button className="test-button">Bottom</button>
            </Tooltip>
          </div>
        </div>
        <div className="demo-custom">
          <Tooltip
            direction="top"
            title="Pink"
            classes={{
              tooltip: {
                backgroundColor: "#fac",
              },
              arrow: {
                backgroundColor: "#fac",
              },
            }}
          >
            <button className="test-button pink">Pink</button>
          </Tooltip>

          <Tooltip
            direction="top"
            title="Yellow"
            classes={{
              tooltip: {
                backgroundColor: "#fff1aa",
                color: "#000000",
              },
              arrow: {
                backgroundColor: "#fff1aa",
              },
            }}
          >
            <button className="test-button yellow">Yellow</button>
          </Tooltip>
        </div>
        <div className="demo-etc">
          <Tooltip direction="top" title="disabled" disable>
            <button className="test-button disabled">Disable</button>
          </Tooltip>

          <Tooltip
            direction="top"
            title={
              <>
                <span>Lorem ipsum dolor sit amet,</span>
                <span>consectetur adipisicing elit.</span>
                <span>Adipisci asperiores atque</span>
              </>
            }
          >
            <div className="test-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </Tooltip>
        </div>
      </section>
    </div>
  );
}
