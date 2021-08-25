/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function requestPermissions(): number;
export function queryCameras(): number;
export function queryConstraints(): number;
export function __wbg_cameraconstraintsbuilder_free(a: number): void;
export function jscameraconstraintsbuilder_new(): number;
export function jscameraconstraintsbuilder_set_Resolution(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_MaxResolution(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_ResolutionExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_MinAspectRatio(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_AspectRatio(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_MaxAspectRatio(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_AspectRatioExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_FacingMode(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_FacingModeExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_MinFrameRate(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_FrameRate(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_MaxFrameRate(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_FrameRateExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_ResizeMode(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_ResizeModeExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_DeviceId(a: number, b: number, c: number): number;
export function jscameraconstraintsbuilder_set_DeviceIdExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_set_GroupId(a: number, b: number, c: number): number;
export function jscameraconstraintsbuilder_set_GroupIdExact(a: number, b: number): number;
export function jscameraconstraintsbuilder_buildCameraConstraints(a: number): number;
export function __wbg_cameraconstraints_free(a: number): void;
export function jscameraconstraints_MediaStreamConstraints(a: number): number;
export function jscameraconstraints_MinResolution(a: number): number;
export function jscameraconstraints_set_MinResolution(a: number, b: number): void;
export function jscameraconstraints_Resolution(a: number): number;
export function jscameraconstraints_set_Resolution(a: number, b: number): void;
export function jscameraconstraints_MaxResolution(a: number): number;
export function jscameraconstraints_set_MaxResolution(a: number, b: number): void;
export function jscameraconstraints_ResolutionExact(a: number): number;
export function jscameraconstraints_set_ResolutionExact(a: number, b: number): void;
export function jscameraconstraints_MinAspectRatio(a: number, b: number): void;
export function jscameraconstraints_set_MinAspectRatio(a: number, b: number): void;
export function jscameraconstraints_AspectRatio(a: number): number;
export function jscameraconstraints_set_AspectRatio(a: number, b: number): void;
export function jscameraconstraints_MaxAspectRatio(a: number, b: number): void;
export function jscameraconstraints_set_MaxAspectRatio(a: number, b: number): void;
export function jscameraconstraints_AspectRatioExact(a: number): number;
export function jscameraconstraints_set_AspectRatioExact(a: number, b: number): void;
export function jscameraconstraints_FacingMode(a: number): number;
export function jscameraconstraints_set_FacingMode(a: number, b: number): void;
export function jscameraconstraints_FacingModeExact(a: number): number;
export function jscameraconstraints_set_FacingModeExact(a: number, b: number): void;
export function jscameraconstraints_MinFrameRate(a: number, b: number): void;
export function jscameraconstraints_set_MinFrameRate(a: number, b: number): void;
export function jscameraconstraints_FrameRate(a: number): number;
export function jscameraconstraints_set_FrameRate(a: number, b: number): void;
export function jscameraconstraints_MaxFrameRate(a: number, b: number): void;
export function jscameraconstraints_set_MaxFrameRate(a: number, b: number): void;
export function jscameraconstraints_FrameRateExact(a: number): number;
export function jscameraconstraints_set_FrameRateExact(a: number, b: number): void;
export function jscameraconstraints_ResizeMode(a: number): number;
export function jscameraconstraints_set_ResizeMode(a: number, b: number): void;
export function jscameraconstraints_ResizeModeExact(a: number): number;
export function jscameraconstraints_set_ResizeModeExact(a: number, b: number): void;
export function jscameraconstraints_DeviceId(a: number, b: number): void;
export function jscameraconstraints_set_DeviceId(a: number, b: number, c: number): void;
export function jscameraconstraints_DeviceIdExact(a: number): number;
export function jscameraconstraints_set_DeviceIdExact(a: number, b: number): void;
export function jscameraconstraints_GroupId(a: number, b: number): void;
export function jscameraconstraints_set_GroupId(a: number, b: number, c: number): void;
export function jscameraconstraints_GroupIdExact(a: number): number;
export function jscameraconstraints_set_GroupIdExact(a: number, b: number): void;
export function jscameraconstraints_applyConstraints(a: number): void;
export function __wbg_nokcamera_free(a: number): void;
export function jscamera_js_new(a: number): number;
export function jscamera_Constraints(a: number): number;
export function jscamera_set_Constraints(a: number, b: number): void;
export function jscamera_Resolution(a: number): number;
export function jscamera_measureResolution(a: number): void;
export function jscamera_applyConstraints(a: number): void;
export function jscamera_MediaStream(a: number): number;
export function jscamera_captureImageData(a: number): number;
export function jscamera_captureImageURI(a: number, b: number, c: number, d: number, e: number): void;
export function jscamera_captureFrameRawData(a: number, b: number): void;
export function jscamera_attachToElement(a: number, b: number, c: number, d: number): void;
export function jscamera_detachCamera(a: number): void;
export function jscameraconstraintsbuilder_set_MinResolution(a: number, b: number): number;
export function __wbg_resolution_free(a: number): void;
export function __wbg_get_resolution_width_x(a: number): number;
export function __wbg_set_resolution_width_x(a: number, b: number): void;
export function __wbg_get_resolution_height_y(a: number): number;
export function __wbg_set_resolution_height_y(a: number, b: number): void;
export function resolution_Width(a: number): number;
export function resolution_Height(a: number): number;
export function __wbg_camerainfo_free(a: number): void;
export function camerainfo_new(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function camerainfo_HumanReadableName(a: number, b: number): void;
export function camerainfo_set_HumanReadableName(a: number, b: number, c: number): void;
export function camerainfo_Description(a: number, b: number): void;
export function camerainfo_set_Description(a: number, b: number, c: number): void;
export function camerainfo_MiscString(a: number, b: number): void;
export function camerainfo_set_MiscString(a: number, b: number, c: number): void;
export function camerainfo_Index(a: number): number;
export function camerainfo_set_Index(a: number, b: number): void;
export function resolution_new(a: number, b: number): number;
export function resolution_x(a: number): number;
export function resolution_y(a: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha79fab5af65c7d0b(a: number, b: number, c: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__hf03b20e2f7b10743(a: number, b: number, c: number, d: number): void;
