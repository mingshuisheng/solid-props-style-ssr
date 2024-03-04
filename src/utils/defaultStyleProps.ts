import { StylePropName, StyleProps } from "../types/styleProps";

type DefaultStyleProps = Required<StyleProps>;

const defaultStyleProps: DefaultStyleProps = {
  accentColor: "",
  alignContent: "",
  alignItems: "",
  alignSelf: "",
  alignTracks: "",
  animationComposition: "replace",
  animationDelay: "",
  animationDirection: "",
  animationDuration: "",
  animationFillMode: "",
  animationIterationCount: "",
  animationName: "",
  animationPlayState: "",
  animationTimeline: "",
  animationTimingFunction: "",
  appearance: "auto",
  aspectRatio: "",
  backdropFilter: "",
  backfaceVisibility: "initial",
  backgroundAttachment: "fixed",
  backgroundBlendMode: "",
  backgroundClip: "",
  backgroundColor: "",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPositionX: "",
  backgroundPositionY: "",
  backgroundRepeat: "repeat",
  backgroundSize: "",
  blockOverflow: "",
  blockSize: "",
  borderBlockColor: "",
  borderBlockEndColor: "",
  borderBlockEndStyle: "inset",
  borderBlockEndWidth: "",
  borderBlockStartColor: "",
  borderBlockStartStyle: "inset",
  borderBlockStartWidth: "",
  borderBlockStyle: "inset",
  borderBlockWidth: "",
  borderBottomColor: "",
  borderBottomLeftRadius: "",
  borderBottomRightRadius: "",
  borderBottomStyle: "inset",
  borderBottomWidth: "",
  borderCollapse: "collapse",
  borderEndEndRadius: "",
  borderEndStartRadius: "",
  borderImageOutset: "",
  borderImageRepeat: "repeat",
  borderImageSlice: "",
  borderImageSource: "",
  borderImageWidth: "",
  borderInlineColor: "",
  borderInlineEndColor: "",
  borderInlineEndStyle: "inset",
  borderInlineEndWidth: "",
  borderInlineStartColor: "",
  borderInlineStartStyle: "inset",
  borderInlineStartWidth: "",
  borderInlineStyle: "inset",
  borderInlineWidth: "",
  borderLeftColor: "",
  borderLeftStyle: "inset",
  borderLeftWidth: "",
  borderRightColor: "",
  borderRightStyle: "inset",
  borderRightWidth: "",
  borderSpacing: "",
  borderStartEndRadius: "",
  borderStartStartRadius: "",
  borderTopColor: "",
  borderTopLeftRadius: "",
  borderTopRightRadius: "",
  borderTopStyle: "inset",
  borderTopWidth: "",
  bottom: "",
  boxDecorationBreak: "slice",
  boxShadow: "",
  boxSizing: "initial",
  breakAfter: "left",
  breakBefore: "left",
  breakInside: "auto",
  captionSide: "bottom",
  caretColor: "",
  caretShape: "block",
  clear: "left",
  clipPath: "",
  color: "",
  colorAdjust: "initial",
  colorScheme: "",
  columnCount: "",
  columnFill: "auto",
  columnGap: "",
  columnRuleColor: "",
  columnRuleStyle: "",
  columnRuleWidth: "",
  columnSpan: "all",
  columnWidth: "",
  contain: "",
  containIntrinsicBlockSize: "",
  containIntrinsicHeight: "",
  containIntrinsicInlineSize: "",
  containIntrinsicWidth: "",
  containerName: "",
  containerType: "inline-size",
  content: "",
  contentVisibility: "auto",
  counterIncrement: "",
  counterReset: "",
  counterSet: "",
  cursor: "",
  direction: "initial",
  display: "",
  emptyCells: "initial",
  filter: "",
  flexBasis: "",
  flexDirection: "column",
  flexGrow: "",
  flexShrink: "",
  flexWrap: "wrap",
  float: "left",
  fontFamily: "",
  fontFeatureSettings: "",
  fontKerning: "auto",
  fontLanguageOverride: "",
  fontOpticalSizing: "auto",
  fontPalette: "",
  fontSize: "",
  fontSizeAdjust: "",
  fontSmooth: "",
  fontStretch: "",
  fontStyle: "",
  fontSynthesis: "",
  fontVariant: "",
  fontVariantAlternates: "",
  fontVariantCaps: "initial",
  fontVariantEastAsian: "",
  fontVariantEmoji: "emoji",
  fontVariantLigatures: "",
  fontVariantNumeric: "",
  fontVariantPosition: "sub",
  fontVariationSettings: "",
  fontWeight: "bold",
  forcedColorAdjust: "auto",
  gridAutoColumns: "",
  gridAutoFlow: "",
  gridAutoRows: "",
  gridColumnEnd: "",
  gridColumnStart: "",
  gridRowEnd: "",
  gridRowStart: "",
  gridTemplateAreas: "",
  gridTemplateColumns: "",
  gridTemplateRows: "",
  hangingPunctuation: "",
  height: "",
  hyphenateCharacter: "",
  hyphenateLimitChars: "",
  hyphens: "auto",
  imageOrientation: "",
  imageRendering: "auto",
  imageResolution: "",
  initialLetter: "",
  inlineSize: "",
  inputSecurity: "auto",
  insetBlockEnd: "",
  insetBlockStart: "",
  insetInlineEnd: "",
  insetInlineStart: "",
  isolation: "auto",
  justifyContent: "",
  justifyItems: "",
  justifySelf: "",
  justifyTracks: "",
  left: "",
  letterSpacing: "",
  lineBreak: "auto",
  lineHeight: "",
  lineHeightStep: "",
  listStyleImage: "",
  listStylePosition: "inside",
  listStyleType: "",
  marginBlockEnd: "",
  marginBlockStart: "",
  marginBottom: "",
  marginInlineEnd: "",
  marginInlineStart: "",
  marginLeft: "",
  marginRight: "",
  marginTop: "",
  marginTrim: "all",
  maskBorderMode: "initial",
  maskBorderOutset: "",
  maskBorderRepeat: "repeat",
  maskBorderSlice: "",
  maskBorderSource: "",
  maskBorderWidth: "",
  maskClip: "",
  maskComposite: "",
  maskImage: "",
  maskMode: "",
  maskOrigin: "",
  maskPosition: "",
  maskRepeat: "repeat",
  maskSize: "",
  maskType: "initial",
  mathDepth: "",
  mathShift: "initial",
  mathStyle: "initial",
  maxBlockSize: "",
  maxHeight: "",
  maxInlineSize: "",
  maxLines: "",
  maxWidth: "",
  minBlockSize: "",
  minHeight: "",
  minInlineSize: "",
  minWidth: "",
  mixBlendMode: "color",
  motionDistance: "",
  motionPath: "",
  motionRotation: "",
  objectFit: "contain",
  objectPosition: "",
  offsetAnchor: "",
  offsetDistance: "",
  offsetPath: "",
  offsetPosition: "",
  offsetRotate: "",
  offsetRotation: "",
  opacity: "",
  order: "",
  orphans: "",
  outlineColor: "",
  outlineOffset: "",
  outlineStyle: "",
  outlineWidth: "",
  overflowAnchor: "auto",
  overflowBlock: "clip",
  overflowClipBox: "initial",
  overflowClipMargin: "",
  overflowInline: "clip",
  overflowWrap: "initial",
  overflowX: "clip",
  overflowY: "clip",
  overscrollBehaviorBlock: "contain",
  overscrollBehaviorInline: "contain",
  overscrollBehaviorX: "contain",
  overscrollBehaviorY: "contain",
  paddingBlockEnd: "",
  paddingBlockStart: "",
  paddingBottom: "",
  paddingInlineEnd: "",
  paddingInlineStart: "",
  paddingLeft: "",
  paddingRight: "",
  paddingTop: "",
  page: "",
  pageBreakAfter: "left",
  pageBreakBefore: "left",
  pageBreakInside: "auto",
  paintOrder: "",
  perspective: "",
  perspectiveOrigin: "",
  pointerEvents: "all",
  position: "fixed",
  printColorAdjust: "initial",
  quotes: "",
  resize: "block",
  right: "",
  rotate: "",
  rowGap: "",
  rubyAlign: "start",
  rubyMerge: "collapse",
  rubyPosition: "",
  scale: "",
  scrollBehavior: "smooth",
  scrollMarginBlockEnd: "",
  scrollMarginBlockStart: "",
  scrollMarginBottom: "",
  scrollMarginInlineEnd: "",
  scrollMarginInlineStart: "",
  scrollMarginLeft: "",
  scrollMarginRight: "",
  scrollMarginTop: "",
  scrollPaddingBlockEnd: "",
  scrollPaddingBlockStart: "",
  scrollPaddingBottom: "",
  scrollPaddingInlineEnd: "",
  scrollPaddingInlineStart: "",
  scrollPaddingLeft: "",
  scrollPaddingRight: "",
  scrollPaddingTop: "",
  scrollSnapAlign: "",
  scrollSnapMarginBottom: "",
  scrollSnapMarginLeft: "",
  scrollSnapMarginRight: "",
  scrollSnapMarginTop: "",
  scrollSnapStop: "initial",
  scrollSnapType: "",
  scrollTimelineAxis: "",
  scrollTimelineName: "",
  scrollbarColor: "",
  scrollbarGutter: "",
  scrollbarWidth: "auto",
  shapeImageThreshold: "",
  shapeMargin: "",
  shapeOutside: "",
  tabSize: "",
  tableLayout: "fixed",
  textAlign: "left",
  textAlignLast: "left",
  textCombineUpright: "",
  textDecorationColor: "",
  textDecorationLine: "blink",
  textDecorationSkip: "",
  textDecorationSkipInk: "all",
  textDecorationStyle: "initial",
  textDecorationThickness: "",
  textEmphasisColor: "",
  textEmphasisPosition: "",
  textEmphasisStyle: "",
  textIndent: "",
  textJustify: "auto",
  textOrientation: "initial",
  textOverflow: "",
  textRendering: "auto",
  textShadow: "",
  textSizeAdjust: "",
  textTransform: "initial",
  textUnderlineOffset: "",
  textUnderlinePosition: "",
  top: "",
  touchAction: "",
  transform: "",
  transformBox: "initial",
  transformOrigin: "",
  transformStyle: "initial",
  transitionDelay: "",
  transitionDuration: "",
  transitionProperty: "",
  transitionTimingFunction: "",
  translate: "",
  unicodeBidi: "initial",
  userSelect: "contain",
  verticalAlign: "",
  viewTransitionName: "",
  visibility: "collapse",
  whiteSpace: "initial",
  widows: "",
  width: "",
  willChange: "",
  wordBreak: "initial",
  wordSpacing: "",
  wordWrap: "initial",
  writingMode: "initial",
  zIndex: "",
  zoom: "",
  all: "initial",
  animation: "",
  background: "",
  backgroundPosition: "",
  border: "",
  borderBlock: "",
  borderBlockEnd: "",
  borderBlockStart: "",
  borderBottom: "",
  borderColor: "",
  borderImage: "repeat",
  borderInline: "",
  borderInlineEnd: "",
  borderInlineStart: "",
  borderLeft: "",
  borderRadius: "",
  borderRight: "",
  borderStyle: "",
  borderTop: "",
  borderWidth: "",
  caret: "",
  columnRule: "",
  columns: "",
  containIntrinsicSize: "",
  container: "",
  flex: "",
  flexFlow: "",
  font: "",
  gap: "",
  grid: "",
  gridArea: "",
  gridColumn: "",
  gridRow: "",
  gridTemplate: "",
  inset: "",
  insetBlock: "",
  insetInline: "",
  lineClamp: "",
  listStyle: "",
  margin: "",
  marginBlock: "",
  marginInline: "",
  mask: "",
  maskBorder: "repeat",
  motion: "",
  offset: "",
  outline: "",
  overflow: "",
  overscrollBehavior: "",
  padding: "",
  paddingBlock: "",
  paddingInline: "",
  placeContent: "",
  placeItems: "",
  placeSelf: "",
  scrollMargin: "",
  scrollMarginBlock: "",
  scrollMarginInline: "",
  scrollPadding: "",
  scrollPaddingBlock: "",
  scrollPaddingInline: "",
  scrollSnapMargin: "",
  scrollTimeline: "",
  textDecoration: "",
  textEmphasis: "",
  transition: "",
  MozAnimationDelay: "",
  MozAnimationDirection: "",
  MozAnimationDuration: "",
  MozAnimationFillMode: "",
  MozAnimationIterationCount: "",
  MozAnimationName: "",
  MozAnimationPlayState: "",
  MozAnimationTimingFunction: "",
  MozAppearance: "caret",
  MozBackfaceVisibility: "initial",
  MozBinding: "",
  MozBorderBottomColors: "",
  MozBorderEndColor: "",
  MozBorderEndStyle: "inset",
  MozBorderEndWidth: "",
  MozBorderLeftColors: "",
  MozBorderRightColors: "",
  MozBorderStartColor: "",
  MozBorderStartStyle: "inset",
  MozBorderTopColors: "",
  MozBoxSizing: "initial",
  MozColumnCount: "",
  MozColumnFill: "auto",
  MozColumnRuleColor: "",
  MozColumnRuleStyle: "",
  MozColumnRuleWidth: "",
  MozColumnWidth: "",
  MozContextProperties: "",
  MozFontFeatureSettings: "",
  MozFontLanguageOverride: "",
  MozHyphens: "auto",
  MozImageRegion: "",
  MozMarginEnd: "",
  MozMarginStart: "",
  MozOrient: "block",
  MozOsxFontSmoothing: "",
  MozPaddingEnd: "",
  MozPaddingStart: "",
  MozPerspective: "",
  MozPerspectiveOrigin: "",
  MozStackSizing: "initial",
  MozTabSize: "",
  MozTextBlink: "blink",
  MozTextSizeAdjust: "",
  MozTransformOrigin: "",
  MozTransformStyle: "initial",
  MozTransitionDelay: "",
  MozTransitionDuration: "",
  MozTransitionProperty: "",
  MozTransitionTimingFunction: "",
  MozUserFocus: "initial",
  MozUserModify: "initial",
  MozUserSelect: "contain",
  MozWindowDragging: "initial",
  MozWindowShadow: "initial",
  msAccelerator: "initial",
  msBlockProgression: "initial",
  msContentZoomChaining: "initial",
  msContentZoomLimitMax: "",
  msContentZoomLimitMin: "",
  msContentZoomSnapPoints: "",
  msContentZoomSnapType: "initial",
  msContentZooming: "zoom",
  msFilter: "",
  msFlexDirection: "column",
  msFlexPositive: "",
  msFlowFrom: "",
  msFlowInto: "",
  msGridColumns: "",
  msGridRows: "",
  msHighContrastAdjust: "auto",
  msHyphenateLimitChars: "",
  msHyphenateLimitLines: "",
  msHyphenateLimitZone: "",
  msHyphens: "auto",
  msImeAlign: "after",
  msLineBreak: "auto",
  msOrder: "",
  msOverflowStyle: "auto",
  msOverflowX: "clip",
  msOverflowY: "clip",
  msScrollChaining: "initial",
  msScrollLimitXMax: "",
  msScrollLimitXMin: "",
  msScrollLimitYMax: "",
  msScrollLimitYMin: "",
  msScrollRails: "initial",
  msScrollSnapPointsX: "",
  msScrollSnapPointsY: "",
  msScrollSnapType: "initial",
  msScrollTranslation: "initial",
  msScrollbar3dlightColor: "",
  msScrollbarArrowColor: "",
  msScrollbarBaseColor: "",
  msScrollbarDarkshadowColor: "",
  msScrollbarFaceColor: "",
  msScrollbarHighlightColor: "",
  msScrollbarShadowColor: "",
  msScrollbarTrackColor: "",
  msTextAutospace: "initial",
  msTextCombineHorizontal: "",
  msTextOverflow: "",
  msTouchAction: "",
  msTouchSelect: "initial",
  msTransform: "",
  msTransformOrigin: "",
  msTransitionDelay: "",
  msTransitionDuration: "",
  msTransitionProperty: "",
  msTransitionTimingFunction: "",
  msUserSelect: "initial",
  msWordBreak: "initial",
  msWrapFlow: "clear",
  msWrapMargin: "",
  msWrapThrough: "wrap",
  msWritingMode: "initial",
  WebkitAlignContent: "",
  WebkitAlignItems: "",
  WebkitAlignSelf: "",
  WebkitAnimationDelay: "",
  WebkitAnimationDirection: "",
  WebkitAnimationDuration: "",
  WebkitAnimationFillMode: "",
  WebkitAnimationIterationCount: "",
  WebkitAnimationName: "",
  WebkitAnimationPlayState: "",
  WebkitAnimationTimingFunction: "",
  WebkitAppearance: "caret",
  WebkitBackdropFilter: "",
  WebkitBackfaceVisibility: "initial",
  WebkitBackgroundClip: "",
  WebkitBackgroundOrigin: "",
  WebkitBackgroundSize: "",
  WebkitBorderBeforeColor: "",
  WebkitBorderBeforeStyle: "",
  WebkitBorderBeforeWidth: "",
  WebkitBorderBottomLeftRadius: "",
  WebkitBorderBottomRightRadius: "",
  WebkitBorderImageSlice: "",
  WebkitBorderTopLeftRadius: "",
  WebkitBorderTopRightRadius: "",
  WebkitBoxDecorationBreak: "slice",
  WebkitBoxReflect: "",
  WebkitBoxShadow: "",
  WebkitBoxSizing: "initial",
  WebkitClipPath: "",
  WebkitColumnCount: "",
  WebkitColumnFill: "auto",
  WebkitColumnRuleColor: "",
  WebkitColumnRuleStyle: "",
  WebkitColumnRuleWidth: "",
  WebkitColumnSpan: "all",
  WebkitColumnWidth: "",
  WebkitFilter: "",
  WebkitFlexBasis: "",
  WebkitFlexDirection: "column",
  WebkitFlexGrow: "",
  WebkitFlexShrink: "",
  WebkitFlexWrap: "wrap",
  WebkitFontFeatureSettings: "",
  WebkitFontKerning: "auto",
  WebkitFontSmoothing: "",
  WebkitFontVariantLigatures: "",
  WebkitHyphenateCharacter: "",
  WebkitHyphens: "auto",
  WebkitInitialLetter: "",
  WebkitJustifyContent: "",
  WebkitLineBreak: "auto",
  WebkitLineClamp: "",
  WebkitMarginEnd: "",
  WebkitMarginStart: "",
  WebkitMaskAttachment: "fixed",
  WebkitMaskBoxImageOutset: "",
  WebkitMaskBoxImageRepeat: "repeat",
  WebkitMaskBoxImageSlice: "",
  WebkitMaskBoxImageSource: "",
  WebkitMaskBoxImageWidth: "",
  WebkitMaskClip: "",
  WebkitMaskComposite: "",
  WebkitMaskImage: "",
  WebkitMaskOrigin: "",
  WebkitMaskPosition: "",
  WebkitMaskPositionX: "",
  WebkitMaskPositionY: "",
  WebkitMaskRepeat: "repeat",
  WebkitMaskRepeatX: "repeat",
  WebkitMaskRepeatY: "repeat",
  WebkitMaskSize: "",
  WebkitMaxInlineSize: "",
  WebkitOrder: "",
  WebkitOverflowScrolling: "auto",
  WebkitPaddingEnd: "",
  WebkitPaddingStart: "",
  WebkitPerspective: "",
  WebkitPerspectiveOrigin: "",
  WebkitPrintColorAdjust: "initial",
  WebkitRubyPosition: "",
  WebkitScrollSnapType: "",
  WebkitShapeMargin: "",
  WebkitTapHighlightColor: "",
  WebkitTextCombine: "",
  WebkitTextDecorationColor: "",
  WebkitTextDecorationLine: "blink",
  WebkitTextDecorationSkip: "",
  WebkitTextDecorationStyle: "initial",
  WebkitTextEmphasisColor: "",
  WebkitTextEmphasisPosition: "",
  WebkitTextEmphasisStyle: "",
  WebkitTextFillColor: "",
  WebkitTextOrientation: "initial",
  WebkitTextSizeAdjust: "",
  WebkitTextStrokeColor: "",
  WebkitTextStrokeWidth: "",
  WebkitTextUnderlinePosition: "",
  WebkitTouchCallout: "initial",
  WebkitTransform: "",
  WebkitTransformOrigin: "",
  WebkitTransformStyle: "initial",
  WebkitTransitionDelay: "",
  WebkitTransitionDuration: "",
  WebkitTransitionProperty: "",
  WebkitTransitionTimingFunction: "",
  WebkitUserModify: "initial",
  WebkitUserSelect: "contain",
  WebkitWritingMode: "initial",
  MozAnimation: "",
  MozBorderImage: "repeat",
  MozColumnRule: "",
  MozColumns: "",
  MozTransition: "",
  msContentZoomLimit: "",
  msContentZoomSnap: "",
  msFlex: "",
  msScrollLimit: "",
  msScrollSnapX: "",
  msScrollSnapY: "",
  msTransition: "",
  WebkitAnimation: "",
  WebkitBorderBefore: "",
  WebkitBorderImage: "repeat",
  WebkitBorderRadius: "",
  WebkitColumnRule: "",
  WebkitColumns: "",
  WebkitFlex: "",
  WebkitFlexFlow: "",
  WebkitMask: "",
  WebkitMaskBoxImage: "repeat",
  WebkitTextEmphasis: "",
  WebkitTextStroke: "",
  WebkitTransition: "",
  azimuth: "",
  boxAlign: "end",
  boxDirection: "initial",
  boxFlex: "",
  boxFlexGroup: "",
  boxLines: "initial",
  boxOrdinalGroup: "",
  boxOrient: "initial",
  boxPack: "end",
  clip: "",
  gridColumnGap: "",
  gridGap: "",
  gridRowGap: "",
  imeMode: "auto",
  offsetBlock: "",
  offsetBlockEnd: "",
  offsetBlockStart: "",
  offsetInline: "",
  offsetInlineEnd: "",
  offsetInlineStart: "",
  scrollSnapCoordinate: "",
  scrollSnapDestination: "",
  scrollSnapPointsX: "",
  scrollSnapPointsY: "",
  scrollSnapTypeX: "initial",
  scrollSnapTypeY: "initial",
  KhtmlBoxAlign: "end",
  KhtmlBoxDirection: "initial",
  KhtmlBoxFlex: "",
  KhtmlBoxFlexGroup: "",
  KhtmlBoxLines: "initial",
  KhtmlBoxOrdinalGroup: "",
  KhtmlBoxOrient: "initial",
  KhtmlBoxPack: "end",
  KhtmlLineBreak: "auto",
  KhtmlOpacity: "",
  KhtmlUserSelect: "contain",
  MozBackgroundClip: "",
  MozBackgroundInlinePolicy: "slice",
  MozBackgroundOrigin: "",
  MozBackgroundSize: "",
  MozBorderRadius: "",
  MozBorderRadiusBottomleft: "",
  MozBorderRadiusBottomright: "",
  MozBorderRadiusTopleft: "",
  MozBorderRadiusTopright: "",
  MozBoxAlign: "end",
  MozBoxDirection: "initial",
  MozBoxFlex: "",
  MozBoxOrdinalGroup: "",
  MozBoxOrient: "initial",
  MozBoxPack: "end",
  MozBoxShadow: "",
  MozFloatEdge: "initial",
  MozForceBrokenImageIcon: 0,
  MozOpacity: "",
  MozOutline: "",
  MozOutlineColor: "",
  MozOutlineRadius: "",
  MozOutlineRadiusBottomleft: "",
  MozOutlineRadiusBottomright: "",
  MozOutlineRadiusTopleft: "",
  MozOutlineRadiusTopright: "",
  MozOutlineStyle: "",
  MozOutlineWidth: "",
  MozTextAlignLast: "left",
  MozTextDecorationColor: "",
  MozTextDecorationLine: "blink",
  MozTextDecorationStyle: "initial",
  MozUserInput: "auto",
  msImeMode: "auto",
  OAnimation: "",
  OAnimationDelay: "",
  OAnimationDirection: "",
  OAnimationDuration: "",
  OAnimationFillMode: "",
  OAnimationIterationCount: "",
  OAnimationName: "",
  OAnimationPlayState: "",
  OAnimationTimingFunction: "",
  OBackgroundSize: "",
  OBorderImage: "repeat",
  OObjectFit: "contain",
  OObjectPosition: "",
  OTabSize: "",
  OTextOverflow: "",
  OTransform: "",
  OTransformOrigin: "",
  OTransition: "",
  OTransitionDelay: "",
  OTransitionDuration: "",
  OTransitionProperty: "",
  OTransitionTimingFunction: "",
  WebkitBoxAlign: "end",
  WebkitBoxDirection: "initial",
  WebkitBoxFlex: "",
  WebkitBoxFlexGroup: "",
  WebkitBoxLines: "initial",
  WebkitBoxOrdinalGroup: "",
  WebkitBoxOrient: "initial",
  WebkitBoxPack: "end",
  // WebkitScrollSnapPointsX: "",
  // WebkitScrollSnapPointsY: "",
  alignmentBaseline: "auto",
  baselineShift: "",
  clipRule: "initial",
  colorInterpolation: "auto",
  colorRendering: "auto",
  dominantBaseline: "auto",
  fill: "",
  fillOpacity: "",
  fillRule: "initial",
  floodColor: "",
  floodOpacity: "",
  glyphOrientationVertical: "",
  lightingColor: "",
  marker: "",
  markerEnd: "",
  markerMid: "",
  markerStart: "",
  shapeRendering: "auto",
  stopColor: "",
  stopOpacity: "",
  stroke: "",
  strokeDasharray: "",
  strokeDashoffset: "",
  strokeLinecap: "initial",
  strokeLinejoin: "initial",
  strokeMiterlimit: "",
  strokeOpacity: "",
  strokeWidth: "",
  textAnchor: "end",
  vectorEffect: "initial",
  animationRangeEnd: "",
  animationRangeStart: "",
  fontSynthesisPosition: "-moz-initial",
  fontSynthesisSmallCaps: "-moz-initial",
  fontSynthesisStyle: "-moz-initial",
  fontSynthesisWeight: "-moz-initial",
  masonryAutoFlow: "initial",
  overlay: "-moz-initial",
  textWrap: "-moz-initial",
  timelineScope: "",
  transitionBehavior: "",
  viewTimelineAxis: "",
  viewTimelineInset: "",
  viewTimelineName: "",
  whiteSpaceCollapse: "-moz-initial",
  whiteSpaceTrim: "",
  animationRange: "",
  viewTimeline: "",
  MozTransform: "",
};

export const styleKeys = Object.keys(defaultStyleProps).filter(
  Boolean
) as Exclude<StylePropName, "sx">[];
