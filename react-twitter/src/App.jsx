import { TwitterFollowCard } from "./TwitterFollowCard";
import React from "react";
import dany from "./assets/twitter_dany.jpg";
import eafc from "./assets/twitter_eafc.jpg";

const App = () => {
  return (
    <div className="flex flex-col">
      <TwitterFollowCard userName="Be_Danyy" name="By_Dany" image={dany} isFollowing={false} />
      <TwitterFollowCard userName="easportsfces" name="EA Sports FC" image={eafc} isFollowing={true} />
    </div>
  );
};

export default App;
