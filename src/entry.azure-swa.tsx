/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the Azure Static Web Apps middleware when building for production.
 *
 * Learn more about the Azure Static Web Apps integration here:
 * - https://qwik.dev/docs/deployments/azure-swa/
 *
 */
import {
  createQwikCity,
  type PlatformAzure,
} from "@builder.io/qwik-city/middleware/azure-swa";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";
import { initializeNodeRuntime } from "@builder.io/sdk-qwik/node/init";

declare global {
  interface QwikCityPlatform extends PlatformAzure {}
}

initializeNodeRuntime();
console.log("Initialized Qwik Node Runtime");

export default createQwikCity({ render, qwikCityPlan, manifest });
