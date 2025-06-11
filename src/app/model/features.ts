export interface Feature { id: number; name: string; }
export interface Operation { id: number; name: string; }
export interface Variation { id: number; name: string; formula: string; params: string[]; }
export interface EvalResponse { status: string; result: number; }
