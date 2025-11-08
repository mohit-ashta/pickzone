export type Player = {
  id: string
  name: string
  elo: number
}

export type Match = {
  id: string
  opponent: string
  result: "win" | "loss" | "draw"
  date: string
}
