const Colors = {
    // Existing
    button: "border-purple-400/80 hover:border-green-400 bg-purple-950/50 hover:bg-green-600/50 hover:drop-shadow-[0_0_10px_rgba(80,200,150,0.5)]",
    get interactable() { return this.button },

    // Typography
    textAccent: "text-purple-400",
    textAccentHover: "hover:text-purple-400",
    textMutedNav: "text-slate-400",
    textBody: "text-gray-300",

    // Indicators / Badges
    indicatorPulse: "bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]",

    // Text & Box Glows
    glowTextWhite: "drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]",
    glowTextPurple: "drop-shadow-[0_0_20px_rgba(211,34,238,0.4)]",
    glowBoxPurple: "shadow-[0_0_15px_rgba(211,34,238,0.5)]",

    // Backgrounds & Borders
    bgBase: "bg-purple-950",
    borderAccent: "border-purple-400/80"
}

export default Colors;