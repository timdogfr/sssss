import React from "react";
import {
  FlexContainer,
  FlexItem,
  Image,
  Progress,
  Title,
} from "./Roadmap.element";

function Roadmap() {
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
              </div>
              <div className="circle_box circle2">
                <div className="circle_cont">
                  <h2>STAKING NFTs</h2>
                  <p>
                    Staking platform which makes holders eligable to earn node
                    rewards
                  </p>
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
              </div>
            </div>
            <div className="allIcons">
              <img src={"config/images/all-icon.png"} className="all" />
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
              </div>
              <div className="circle_box circle5">
                <div className="circle_cont">
                  <h2>VOTING</h2>
                  <p>
                    Governance for NFT holders to vote on important decisions
                  </p>
                </div>
              </div>
              <div className="circle_box circle6">
                <div className="circle_cont">
                  <h2>asset acquisition</h2>
                  <p>
                    Buying nodes within different protocols using raised funds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlexContainer id="tokenomic">
     
         <FlexItem>
          <Title>Future development & Marketing</Title>
          <Progress>15%</Progress>
          <Image src={"config/images/1.png"} wid={50} />
        </FlexItem>
        <FlexItem>
        <Title>Weekly node giveaways for nft holders</Title>
          <Progress>25%</Progress>
          <Image src={"config/images/2.png"} wid={50} />
        </FlexItem>
        <FlexItem>
        <Title>Reward distribution through nft staking</Title>
          <Progress>20%</Progress>
          <Image src={"config/images/3.png"} wid={50} />
        </FlexItem>
        <FlexItem>
        <Title>Compounding rewards into new nodes</Title>
          <Progress>40%</Progress>
          <Image src={"config/images/4.png"} wid={50} />
        </FlexItem>
      </FlexContainer>
    </>
  );
}

export default Roadmap;
