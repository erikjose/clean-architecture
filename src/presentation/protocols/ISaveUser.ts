export namespace SaveUser {
  export type Input = {
    name: string
    email: string
    initials: string
  }
  export type Output = {
    id: number
    name: string
    email: string
    initials: string
  }
}
