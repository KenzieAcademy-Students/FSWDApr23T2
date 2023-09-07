import teams from "./data/teams.json";
function getAllPlayers() {
  const allPlayers = [];

  teams.forEach((team) => {
    // console.log(team.roster);
    team.roster.athletes.forEach((position) => {
      // console.log(position.items);
      allPlayers.push(...position.items);
    });
  });

  return allPlayers;
}
export default getAllPlayers;
