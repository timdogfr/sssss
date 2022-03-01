import React from "react";

function Embed() {
  return (
    <>
      <div className="bodyWrap">
        <div className="circle_area">
          <div className="circleContainer">
            <div className="circle_left">
              <div className="circle_box circle1">
                <div className="circle_cont">
                  <h2>LAUNCH</h2>
                  <p>
                    NFT minting starts on March 1st on the Avalanche network
                  </p>
                </div>
                <div className="circle-img" style="display: none;">
                  <img src="assets/img/rocket.svg" alt="rocket" />
                </div>
              </div>
              <div className="circle_box circle2">
                <div className="circle_cont">
                  <h2>STAKING NFTs</h2>
                  <p>
                    Staking platform which makes holders eligable to earn node
                    rewards
                  </p>
                </div>
                <div className="circle-img" style="display: none;">
                  <img src="assets/img/lock.svg" alt="lock" />
                </div>
              </div>
              <div className="circle_box circle3">
                <div className="circle_cont">
                  <h2>COMPOUNDING</h2>
                  <p>
                    Buying more nodes with a great portion of the rewards to
                    grow our treasury
                  </p>
                </div>
                <div className="circle-img" style="display: none;">
                  <img src="assets/img/dolar.svg" alt="dolar" />
                </div>
              </div>
            </div>
            <div className="allIcons">
              <img src="assets/img/all-icon.png" className="all" />
              <img
                src="assets/img/bull.png"
                className="bull"
                style="display: none;"
              />
            </div>
            <div className="circle_right">
              <div className="circle_box circle4">
                <div className="circle_cont">
                  <h2>WEEKLY NODE GIVEAWAYS</h2>
                  <p>
                    Giveaway of multiple nodes from different protocols. The
                    greater the rewards the more node giveaways.
                  </p>
                </div>
                <div className="circle-img" style="display: none;">
                  <img src="assets/img/chart.svg" alt="chart" />
                </div>
              </div>
              <div className="circle_box circle5">
                <div className="circle_cont">
                  <h2>VOTING</h2>
                  <p>
                    Governance for NFT holders to vote on important decisions
                  </p>
                </div>
                <div className="circle-img" style="display: none;">
                  <img src="assets/img/user.svg" alt="user" />
                </div>
              </div>
              <div className="circle_box circle6">
                <div className="circle_cont">
                  <h2>asset acquisition</h2>
                  <p>
                    Buying nodes within different protocols using raised funds
                  </p>
                </div>
                <div className="circle-img" style="display: none;">
                  <img src="assets/img/home.svg" alt="home" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tokken_progressArea">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <div className="progress_box progressbo-1">
                <p>Future development & Marketing</p>
                <h3>15%</h3>
                <img
                  src="assets/img/1.png"
                  alt="Progress Bar"
                  className="progress_img"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="progress_box progressbo-2">
                <p>Weekly node giveaways for nft holders</p>
                <h3>25%</h3>
                <img
                  src="assets/img/2.png"
                  alt="Progress Bar"
                  className="progress_img"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="progress_box progressbo-3">
                <p>Reward distribution through nft staking</p>
                <h3>20%</h3>
                <img
                  src="assets/img/3.png"
                  alt="Progress Bar"
                  className="progress_img"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="progress_box progressbo-4">
                <p>Compounding rewards into new nodes</p>
                <h3>40%</h3>
                <img
                  src="assets/img/4.png"
                  alt="Progress Bar"
                  className="progress_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Embed;
