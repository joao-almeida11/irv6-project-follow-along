export default async function getScore(game) {
  const response = await fetch("/score?game=" + game);
  const score = await response.join();
  return score;
}
