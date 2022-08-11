export type SearchOptions = {
  search_key: string,
  scoreThreshold: number,
  fuzzyOpts:{
    analyzeSubTerms: boolean,
    analyzeSubTermDepth: number,
    highlighting:{
      after: string,
      before: string
    }
  }
}