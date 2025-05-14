(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, variant = "experience", ...props }) {
    const indicatorClass = {
        level: "bg-gradient-to-r from-yellow-400 to-yellow-500",
        energy: "bg-gradient-to-r from-green-400 to-green-500",
        experience: "bg-gradient-to-r from-indigo-500 to-indigo-600"
    }[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-gray-900/50 border-2 border-gray-600", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full flex-1 transition-all duration-300", indicatorClass),
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/items.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LEVEL_THRESHOLDS": (()=>LEVEL_THRESHOLDS),
    "SEEDS": (()=>SEEDS),
    "TOOLS": (()=>TOOLS)
});
const SEEDS = {
    parsnip: {
        name: "Parsnip Seeds",
        price: 20,
        growthTime: 4,
        sellPrice: 35,
        season: [
            "spring"
        ],
        description: "Takes 4 days to mature. Grows in Spring.",
        xp: 8
    },
    potato: {
        name: "Potato Seeds",
        price: 50,
        growthTime: 6,
        sellPrice: 80,
        season: [
            "spring"
        ],
        description: "Takes 6 days to mature. Grows in Spring.",
        xp: 12
    },
    cauliflower: {
        name: "Cauliflower Seeds",
        price: 80,
        growthTime: 12,
        sellPrice: 175,
        season: [
            "spring"
        ],
        description: "Takes 12 days to mature. Grows in Spring.",
        xp: 18
    },
    strawberry: {
        name: "Strawberry Seeds",
        price: 100,
        growthTime: 8,
        sellPrice: 120,
        season: [
            "spring"
        ],
        description: "Takes 8 days to mature. Grows in Spring.",
        xp: 15
    }
};
const TOOLS = {
    hoe: {
        name: "Hoe",
        description: "Used to harvest crops",
        durability: 100,
        energyCost: 2
    },
    wateringCan: {
        name: "Watering Can",
        description: "Used to water crops",
        capacity: 100,
        energyCost: 1
    }
};
const LEVEL_THRESHOLDS = [
    100,
    250,
    500,
    1000,
    2000,
    3500,
    5500,
    8000,
    11000,
    15000 // Level 10 -> 11
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/GameContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GameProvider": (()=>GameProvider),
    "useGame": (()=>useGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/items.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const defaultGameState = {
    player: {
        level: 1,
        experience: 0,
        energy: 100,
        coins: 500,
        position: {
            x: 400,
            y: 300
        },
        selectedTool: null,
        tools: {
            hoe: {
                durability: 100
            },
            wateringCan: {
                capacity: 100
            }
        }
    },
    gameTime: {
        hour: 6,
        minute: 0,
        day: 1,
        season: 'Spring'
    },
    inventory: {
        items: [
            {
                id: "parsnip-seed-1",
                type: "seed",
                name: "Parsnip Seeds",
                quantity: 5,
                data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEEDS"].parsnip
            }
        ],
        maxSlots: 20
    },
    crops: {}
};
const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function GameProvider({ children }) {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultGameState);
    // Update game time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            const timer = setInterval({
                "GameProvider.useEffect.timer": ()=>{
                    setGameState({
                        "GameProvider.useEffect.timer": (prev)=>{
                            const newMinute = prev.gameTime.minute + 10;
                            let newHour = prev.gameTime.hour;
                            let newDay = prev.gameTime.day;
                            // Update time
                            if (newMinute >= 60) {
                                newHour++;
                            }
                            if (newHour >= 24) {
                                newHour = 0;
                                newDay++;
                            }
                            // Update crops
                            const newCrops = {
                                ...prev.crops
                            };
                            Object.entries(newCrops).forEach({
                                "GameProvider.useEffect.timer": ([position, crop])=>{
                                    if (crop && crop.watered) {
                                        const seedData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEEDS"][crop.type];
                                        const daysPassed = newDay - crop.plantedDay;
                                        const growthStage = Math.min(3, Math.floor(daysPassed / seedData.growthTime * 4));
                                        newCrops[position] = {
                                            ...crop,
                                            stage: growthStage,
                                            watered: false // Reset watering for the new day
                                        };
                                    }
                                }
                            }["GameProvider.useEffect.timer"]);
                            return {
                                ...prev,
                                gameTime: {
                                    ...prev.gameTime,
                                    minute: newMinute % 60,
                                    hour: newHour,
                                    day: newDay
                                },
                                crops: newCrops
                            };
                        }
                    }["GameProvider.useEffect.timer"]);
                }
            }["GameProvider.useEffect.timer"], 1000) // 1 real second = 10 game minutes
            ;
            return ({
                "GameProvider.useEffect": ()=>clearInterval(timer)
            })["GameProvider.useEffect"];
        }
    }["GameProvider.useEffect"], []);
    const updatePlayerPosition = (x, y)=>{
        setGameState((prev)=>({
                ...prev,
                player: {
                    ...prev.player,
                    position: {
                        x,
                        y
                    }
                }
            }));
    };
    const updateEnergy = (amount)=>{
        setGameState((prev)=>({
                ...prev,
                player: {
                    ...prev.player,
                    energy: Math.max(0, Math.min(100, prev.player.energy + amount))
                }
            }));
    };
    const updateCoins = (amount)=>{
        setGameState((prev)=>({
                ...prev,
                player: {
                    ...prev.player,
                    coins: Math.max(0, prev.player.coins + amount)
                }
            }));
    };
    const addExperience = (amount)=>{
        setGameState((prev)=>{
            const newExp = prev.player.experience + amount;
            let newLevel = prev.player.level;
            while(newLevel <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_THRESHOLDS"].length && newExp >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_THRESHOLDS"][newLevel - 1]){
                newLevel++;
            }
            return {
                ...prev,
                player: {
                    ...prev.player,
                    level: newLevel,
                    experience: newExp
                }
            };
        });
    };
    const selectTool = (tool)=>{
        setGameState((prev)=>({
                ...prev,
                player: {
                    ...prev.player,
                    selectedTool: tool
                }
            }));
    };
    const useTool = (position)=>{
        setGameState((prev)=>{
            const tool = prev.player.selectedTool;
            if (!tool) return prev;
            const toolData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLS"][tool];
            if (prev.player.energy < toolData.energyCost) return prev;
            const newState = {
                ...prev
            };
            // Update tool durability/capacity
            if ("durability" in prev.player.tools[tool]) {
                newState.player.tools[tool].durability -= 1;
            }
            if ("capacity" in prev.player.tools[tool] && tool === "wateringCan") {
                newState.player.tools[tool].capacity -= 1;
            }
            // Update energy
            newState.player.energy -= toolData.energyCost;
            return newState;
        });
    };
    const plantSeed = (position, seed)=>{
        setGameState((prev)=>{
            const seedItem = prev.inventory.items.find((item)=>item.type === "seed" && item.name === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEEDS"][seed].name);
            if (!seedItem || seedItem.quantity <= 0) return prev;
            return {
                ...prev,
                crops: {
                    ...prev.crops,
                    [position]: {
                        type: seed,
                        stage: 0,
                        watered: false,
                        plantedDay: prev.gameTime.day
                    }
                },
                inventory: {
                    ...prev.inventory,
                    items: prev.inventory.items.map((item)=>item.id === seedItem.id ? {
                            ...item,
                            quantity: item.quantity - 1
                        } : item).filter((item)=>item.quantity > 0)
                }
            };
        });
    };
    const waterCrop = (position)=>{
        setGameState((prev)=>{
            if (!prev.crops[position]) return prev;
            return {
                ...prev,
                crops: {
                    ...prev.crops,
                    [position]: {
                        ...prev.crops[position],
                        watered: true
                    }
                }
            };
        });
    };
    const harvestCrop = (position)=>{
        setGameState((prev)=>{
            const crop = prev.crops[position];
            if (!crop) return prev;
            const seedData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEEDS"][crop.type];
            const harvestedCrop = {
                type: "crop",
                name: seedData.name.replace(" Seeds", ""),
                quantity: 1,
                data: {
                    sellPrice: seedData.sellPrice,
                    description: `A fresh ${seedData.name.replace(" Seeds", "").toLowerCase()}.`
                }
            };
            const newState = {
                ...prev,
                crops: {
                    ...prev.crops,
                    [position]: null
                },
                inventory: {
                    ...prev.inventory,
                    items: [
                        ...prev.inventory.items,
                        {
                            ...harvestedCrop,
                            id: `${crop.type}-${Date.now()}`
                        }
                    ]
                }
            };
            // Add experience for harvesting
            addExperience(seedData.xp);
            return newState;
        });
    };
    const addItem = (item)=>{
        setGameState((prev)=>{
            const existingItem = prev.inventory.items.find((i)=>i.type === item.type && i.name === item.name);
            if (existingItem) {
                return {
                    ...prev,
                    inventory: {
                        ...prev.inventory,
                        items: prev.inventory.items.map((i)=>i.id === existingItem.id ? {
                                ...i,
                                quantity: i.quantity + item.quantity
                            } : i)
                    }
                };
            }
            if (prev.inventory.items.length >= prev.inventory.maxSlots) return prev;
            return {
                ...prev,
                inventory: {
                    ...prev.inventory,
                    items: [
                        ...prev.inventory.items,
                        {
                            ...item,
                            id: `${item.type}-${Date.now()}`
                        }
                    ]
                }
            };
        });
    };
    const removeItem = (itemId, quantity)=>{
        setGameState((prev)=>({
                ...prev,
                inventory: {
                    ...prev.inventory,
                    items: prev.inventory.items.map((item)=>item.id === itemId ? {
                            ...item,
                            quantity: item.quantity - quantity
                        } : item).filter((item)=>item.quantity > 0)
                }
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: {
            gameState,
            updatePlayerPosition,
            updateEnergy,
            updateCoins,
            addExperience,
            selectTool,
            useTool,
            plantSeed,
            waterCrop,
            harvestCrop,
            addItem,
            removeItem
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/GameContext.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
_s(GameProvider, "ohsoeHLuf7h43QJ7P6xshP4rz8I=");
_c = GameProvider;
function useGame() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
_s1(useGame, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "GameProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/GameWorld.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GameWorld)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/items.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GameWorld({ onMove }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playerPos, setPlayerPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 400,
        y: 300
    });
    const [isMoving, setIsMoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [plants, setPlants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSeed, setSelectedSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('parsnip');
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { gameState, updateEnergy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    // Game loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameWorld.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            canvas.width = 800;
            canvas.height = 600;
            // Game loop
            let animationFrameId;
            const render = {
                "GameWorld.useEffect.render": ()=>{
                    // Clear canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Draw background (grass pattern)
                    ctx.fillStyle = '#2d5a27';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Draw grid pattern
                    ctx.strokeStyle = '#234d1f';
                    ctx.lineWidth = 1;
                    const gridSize = 32;
                    for(let x = 0; x < canvas.width; x += gridSize){
                        ctx.beginPath();
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, canvas.height);
                        ctx.stroke();
                    }
                    for(let y = 0; y < canvas.height; y += gridSize){
                        ctx.beginPath();
                        ctx.moveTo(0, y);
                        ctx.lineTo(canvas.width, y);
                        ctx.stroke();
                    }
                    // Draw plants
                    plants.forEach({
                        "GameWorld.useEffect.render": (plant)=>{
                            ctx.fillStyle = '#8B4513' // soil color
                            ;
                            ctx.fillRect(plant.x - 12, plant.y - 12, 24, 24);
                            if (plant.stage > 0) {
                                // Plant growth visualization
                                ctx.fillStyle = '#90EE90';
                                const height = plant.stage / 4 * 20 // Max height is 20 pixels
                                ;
                                ctx.fillRect(plant.x - 4, plant.y - height, 8, height);
                            }
                        }
                    }["GameWorld.useEffect.render"]);
                    // Draw player
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.arc(playerPos.x, playerPos.y, 16, 0, Math.PI * 2);
                    ctx.fill();
                    // Draw player name and selected seed
                    ctx.fillStyle = '#FFFFFF';
                    ctx.font = 'bold 16px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText('Player', playerPos.x, playerPos.y - 30);
                    if (selectedSeed) {
                        ctx.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEEDS"][selectedSeed].name, playerPos.x, playerPos.y - 50);
                    }
                    // Request next frame
                    animationFrameId = requestAnimationFrame(render);
                }
            }["GameWorld.useEffect.render"];
            render();
            return ({
                "GameWorld.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                }
            })["GameWorld.useEffect"];
        }
    }["GameWorld.useEffect"], [
        playerPos,
        plants,
        selectedSeed
    ]);
    // Handle keyboard input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameWorld.useEffect": ()=>{
            const moveSpeed = 4;
            const handleKeyDown = {
                "GameWorld.useEffect.handleKeyDown": (e)=>{
                    setIsMoving(true);
                    switch(e.key){
                        case 'ArrowUp':
                        case 'w':
                            setDirection('up');
                            setPlayerPos({
                                "GameWorld.useEffect.handleKeyDown": (prev)=>({
                                        ...prev,
                                        y: Math.max(16, prev.y - moveSpeed)
                                    })
                            }["GameWorld.useEffect.handleKeyDown"]);
                            break;
                        case 'ArrowDown':
                        case 's':
                            setDirection('down');
                            setPlayerPos({
                                "GameWorld.useEffect.handleKeyDown": (prev)=>({
                                        ...prev,
                                        y: Math.min(584, prev.y + moveSpeed)
                                    })
                            }["GameWorld.useEffect.handleKeyDown"]);
                            break;
                        case 'ArrowLeft':
                        case 'a':
                            setDirection('left');
                            setPlayerPos({
                                "GameWorld.useEffect.handleKeyDown": (prev)=>({
                                        ...prev,
                                        x: Math.max(16, prev.x - moveSpeed)
                                    })
                            }["GameWorld.useEffect.handleKeyDown"]);
                            break;
                        case 'ArrowRight':
                        case 'd':
                            setDirection('right');
                            setPlayerPos({
                                "GameWorld.useEffect.handleKeyDown": (prev)=>({
                                        ...prev,
                                        x: Math.min(784, prev.x + moveSpeed)
                                    })
                            }["GameWorld.useEffect.handleKeyDown"]);
                            break;
                        case ' ':
                            if (gameState.player.energy >= 5) {
                                const newPlant = {
                                    x: playerPos.x,
                                    y: playerPos.y,
                                    stage: 0,
                                    type: selectedSeed
                                };
                                setPlants({
                                    "GameWorld.useEffect.handleKeyDown": (prev)=>[
                                            ...prev,
                                            newPlant
                                        ]
                                }["GameWorld.useEffect.handleKeyDown"]);
                                updateEnergy(-5);
                            }
                            break;
                        case '1':
                            setSelectedSeed('parsnip');
                            break;
                        case '2':
                            setSelectedSeed('potato');
                            break;
                        case '3':
                            setSelectedSeed('cauliflower');
                            break;
                        case '4':
                            setSelectedSeed('strawberry');
                            break;
                        case 'h':
                            setShowControls({
                                "GameWorld.useEffect.handleKeyDown": (prev)=>!prev
                            }["GameWorld.useEffect.handleKeyDown"]);
                            break;
                    }
                }
            }["GameWorld.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "GameWorld.useEffect.handleKeyUp": ()=>{
                    setIsMoving(false);
                    setDirection('');
                }
            }["GameWorld.useEffect.handleKeyUp"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return ({
                "GameWorld.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                }
            })["GameWorld.useEffect"];
        }
    }["GameWorld.useEffect"], [
        onMove,
        gameState.player.energy,
        updateEnergy,
        playerPos,
        selectedSeed
    ]);
    // Plant growth system
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameWorld.useEffect": ()=>{
            const growthInterval = setInterval({
                "GameWorld.useEffect.growthInterval": ()=>{
                    setPlants({
                        "GameWorld.useEffect.growthInterval": (prevPlants)=>prevPlants.map({
                                "GameWorld.useEffect.growthInterval": (plant)=>({
                                        ...plant,
                                        stage: plant.stage < 4 ? plant.stage + 1 : plant.stage
                                    })
                            }["GameWorld.useEffect.growthInterval"])
                    }["GameWorld.useEffect.growthInterval"]);
                }
            }["GameWorld.useEffect.growthInterval"], 10000) // Plants grow every 10 seconds
            ;
            return ({
                "GameWorld.useEffect": ()=>clearInterval(growthInterval)
            })["GameWorld.useEffect"];
        }
    }["GameWorld.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center bg-gray-900",
        children: [
            showControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "absolute top-4 left-4 text-white text-lg z-10 bg-gray-800/80 p-4 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold",
                                children: "Controls:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/GameWorld.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "text-white hover:bg-gray-700/50 p-1 h-auto",
                                onClick: ()=>setShowControls(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/GameWorld.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "WASD / Arrows - Move"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Space - Plant (5 energy)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "1-4 - Select Seeds"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "H - Toggle Controls"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameWorld.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                className: "absolute top-4 left-4 text-white bg-gray-800/80 hover:bg-gray-700/80 z-10",
                onClick: ()=>setShowControls(true),
                children: "Show Controls (H)"
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameWorld.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "border-4 border-gray-700 rounded-lg shadow-lg",
                style: {
                    imageRendering: 'pixelated'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameWorld.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 right-4 md:hidden grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-4 bg-white/20 rounded-lg active:bg-white/30 text-white font-bold text-2xl",
                        onTouchStart: ()=>setDirection('up'),
                        onTouchEnd: ()=>setDirection(''),
                        children: "↑"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-4 bg-white/20 rounded-lg active:bg-white/30 text-white font-bold text-2xl",
                        onTouchStart: ()=>setDirection('down'),
                        onTouchEnd: ()=>setDirection(''),
                        children: "↓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-4 bg-white/20 rounded-lg active:bg-white/30 text-white font-bold text-2xl",
                        onTouchStart: ()=>setDirection('left'),
                        onTouchEnd: ()=>setDirection(''),
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-4 bg-white/20 rounded-lg active:bg-white/30 text-white font-bold text-2xl",
                        onTouchStart: ()=>setDirection('right'),
                        onTouchEnd: ()=>setDirection(''),
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameWorld.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameWorld.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameWorld.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(GameWorld, "kv75Ztn7DluoUTeqSJsBMXlzyXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = GameWorld;
var _c;
__turbopack_context__.k.register(_c, "GameWorld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game/Market.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Market": (()=>Market)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/GameContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Market() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { gameState, updateCoins } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { player, inventory } = gameState;
    // Handle Escape key press
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Market.useEffect": ()=>{
            const handleEscapeKey = {
                "Market.useEffect.handleEscapeKey": (e)=>{
                    if (e.key === 'Escape' && isOpen) {
                        setIsOpen(false);
                    }
                }
            }["Market.useEffect.handleEscapeKey"];
            window.addEventListener('keydown', handleEscapeKey);
            return ({
                "Market.useEffect": ()=>window.removeEventListener('keydown', handleEscapeKey)
            })["Market.useEffect"];
        }
    }["Market.useEffect"], [
        isOpen
    ]);
    const sellCrop = (itemId, price)=>{
        updateCoins(price);
    // Remove item from inventory logic would be handled by GameContext
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "w-full text-lg py-3 bg-yellow-600 hover:bg-yellow-700 text-white border-2 border-yellow-500",
            variant: "outline",
            onClick: ()=>setIsOpen(true),
            children: "Market"
        }, void 0, false, {
            fileName: "[project]/src/components/game/Market.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50",
        onClick: (e)=>{
            // Close when clicking the backdrop
            if (e.target === e.currentTarget) {
                setIsOpen(false);
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-[500px] bg-gray-800/95 p-6 border-2 border-gray-600 shadow-2xl relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    className: "absolute top-4 right-4 text-white border-gray-500 hover:bg-gray-700",
                    onClick: ()=>setIsOpen(false),
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/Market.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white",
                            children: "Market"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Market.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-white",
                                    children: "Your Crops"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/Market.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 max-h-[400px] overflow-y-auto pr-2",
                                    children: [
                                        inventory.items.filter((item)=>item.type === "crop").map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-medium text-white",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/game/Market.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-300",
                                                                children: [
                                                                    "Quantity: ",
                                                                    item.quantity
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/game/Market.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/Market.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        className: "bg-green-600 hover:bg-green-700 text-white border-green-500 ml-4",
                                                        onClick: ()=>sellCrop(item.id, item.data.sellPrice),
                                                        children: [
                                                            "Sell for ",
                                                            item.data.sellPrice,
                                                            " 🪙"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/game/Market.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/components/game/Market.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)),
                                        inventory.items.filter((item)=>item.type === "crop").length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-700/30 rounded-lg border border-gray-600 p-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-center text-lg",
                                                children: [
                                                    "No crops to sell yet.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/game/Market.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 42
                                                    }, this),
                                                    "Plant some seeds and wait for them to grow!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/Market.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/Market.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/Market.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/Market.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 border-t border-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm text-center",
                                children: "Tip: Press ESC to close this window"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/Market.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/Market.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/Market.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/Market.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/Market.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Market, "ZlH2Fg5Bb1Qlhoi43S1Nf36/Iwo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = Market;
var _c;
__turbopack_context__.k.register(_c, "Market");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/easter-valley/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EasterValley)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameWorld$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/GameWorld.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Market$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/Market.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/items.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function GameContent() {
    _s();
    const { gameState, updateEnergy, updateCoins, addExperience } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const { player, gameTime } = gameState;
    const handleAction = (action)=>{
        switch(action){
            case 'farm':
                updateEnergy(-10);
                updateCoins(15);
                addExperience(5);
                break;
            case 'mine':
                updateEnergy(-15);
                updateCoins(25);
                addExperience(8);
                break;
            case 'fish':
                updateEnergy(-8);
                updateCoins(20);
                addExperience(6);
                break;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-0 left-0 right-0 bg-gray-900/95 border-b-2 border-gray-600 p-4 z-50 backdrop-blur-sm shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1400px] mx-auto grid grid-cols-12 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-gray-800/90 border-2 border-gray-600 p-3 shadow-lg flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-bold text-white",
                                                children: [
                                                    "Level ",
                                                    player.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                value: player.experience / (player.level * 100) * 100,
                                                className: "h-3 mt-2",
                                                variant: "level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-gray-800/90 border-2 border-gray-600 p-3 shadow-lg flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-bold text-white",
                                                children: "Energy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                value: player.energy,
                                                className: "h-3 mt-2",
                                                variant: "energy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-6 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-gray-800/90 border-2 border-gray-600 p-3 shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-white text-center",
                                        children: [
                                            gameTime.season,
                                            " ",
                                            gameTime.day,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 51
                                            }, this),
                                            String(gameTime.hour).padStart(2, '0'),
                                            ":",
                                            String(gameTime.minute).padStart(2, '0')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-gray-800/90 border-2 border-gray-600 p-3 shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-white",
                                        children: [
                                            "🪙 ",
                                            player.coins
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/easter-valley/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/easter-valley/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-12 gap-6 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-3 bg-gray-800/90 border-2 border-gray-600 p-6 shadow-lg sticky top-28 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-4 text-white",
                                        children: "Inventory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-3",
                                        children: Array.from({
                                            length: gameState.inventory.maxSlots
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square bg-gray-700/80 rounded-lg border-2 border-gray-600 hover:border-gray-400 transition-colors cursor-pointer shadow-md"
                                            }, i, false, {
                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-6 bg-gray-800/90 rounded-xl border-2 border-gray-600 min-h-[600px] relative overflow-hidden shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameWorld$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "col-span-3 bg-gray-800/90 border-2 border-gray-600 p-6 shadow-lg sticky top-28 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Seeds"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEEDS"]).map(([key, seed])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                className: "w-full text-lg py-3 bg-green-600 hover:bg-green-700 text-white border-2 border-green-500",
                                                                variant: "outline",
                                                                onClick: ()=>{
                                                                    if (player.coins >= seed.price) {
                                                                        updateCoins(-seed.price);
                                                                    // Add seed to inventory logic here
                                                                    }
                                                                },
                                                                disabled: player.coins < seed.price,
                                                                children: [
                                                                    seed.name,
                                                                    " (",
                                                                    seed.price,
                                                                    " 🪙)"
                                                                ]
                                                            }, key, true, {
                                                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$Market$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Market"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/easter-valley/page.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/easter-valley/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Chat"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-900/80 rounded-lg p-4 h-48 overflow-y-auto mb-3 border-2 border-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-gray-300",
                                                        children: "Welcome to Easter Valley!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/easter-valley/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "flex-1 bg-gray-700/80 rounded-lg px-4 py-2 text-lg text-white border-2 border-gray-600 focus:border-gray-400 focus:outline-none",
                                                            placeholder: "Type a message..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/easter-valley/page.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "px-6 bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-500",
                                                            variant: "secondary",
                                                            size: "lg",
                                                            children: "Send"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/easter-valley/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/easter-valley/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/easter-valley/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/easter-valley/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/easter-valley/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/easter-valley/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/easter-valley/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/easter-valley/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(GameContent, "Wrn9TTidDW5YJwAhxjlJENhjkt8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = GameContent;
function EasterValley() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContent, {}, void 0, false, {
            fileName: "[project]/src/app/easter-valley/page.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/easter-valley/page.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c1 = EasterValley;
var _c, _c1;
__turbopack_context__.k.register(_c, "GameContent");
__turbopack_context__.k.register(_c1, "EasterValley");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_798f7d4d._.js.map