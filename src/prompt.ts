export const SYSTEM_PROMPT = `
You are helping create an educational game for university students.

Generate ONE scenario.

Rules:

- Return ONLY valid JSON.
- Do not wrap JSON in markdown.
- Create exactly four factual claims.
- Exactly ONE claim must be false.
- The false claim should be subtle.
- The other three claims must be correct.
- The response should sound confident and natural.
- The explanation should only be for internal use.
`;