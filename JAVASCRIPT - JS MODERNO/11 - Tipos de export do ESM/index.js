import { inline } from "./inline.js";
// import { inline as NomeQualquer } from "./inline.js";

import defaultInline from "./inline.js";
// import PossoColocarQualquerNome from "./inline.js";

import { group } from "./non-inline.js";
// import { group as NomeQualquer } from "./inline.js";

import exportDefault from "./non-inline.js";
// import PossoColocarQualquerNome from "./inline.js";

// import exportDefault, { group } from "./non-inline.js"; (Podem ser chamados juntos no mesmo import)

inline();
defaultInline();

group();
exportDefault();
