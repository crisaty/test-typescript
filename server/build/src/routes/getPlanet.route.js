"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlanetsBuilder = void 0;
const joi_1 = __importDefault(require("joi"));
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.getPlanetsBuilder = (getPlanetInfo) => async (planetId) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        diameter: joi_1.default.number().required()
    }).options({ allowUnknown: true });
    const response = await getPlanetInfo(`https://swapi.dev/api/planets/${planetId}`);
    const result = schema.validate(await response.json());
    if (result.error) {
        throw result.error;
    }
    else {
        return result.value;
    }
};
const getPlanetService = exports.getPlanetsBuilder(node_fetch_1.default);
const getPlanetRouteHandler = async (ctx) => {
    const planetId = ctx.params.planetId;
    const result = await getPlanetService(planetId);
    ctx.body = result;
};
exports.default = getPlanetRouteHandler;
//# sourceMappingURL=getPlanet.route.js.map