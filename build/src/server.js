"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const getPlanet_route_1 = __importDefault(require("./routes/getPlanet.route"));
const api = new koa_1.default();
const router = new koa_router_1.default();
// Routes
router.get('/', async (ctx, next) => {
    ctx.body = { message: 'Hello world!' };
});
router.get('/health', async (ctx, next) => {
    ctx.body = { message: 'OK' };
});
router.get('/planets/:planetId', getPlanet_route_1.default);
// Middlewares
api.use(koa_json_1.default());
api.use(koa_logger_1.default());
// Set Routes
api.use(router.routes()).use(router.allowedMethods());
const server = api.listen(5000, () => {
    const { port } = server.address();
    console.log(`\nServer listening on PORT ${port}\n`);
});
//# sourceMappingURL=server.js.map