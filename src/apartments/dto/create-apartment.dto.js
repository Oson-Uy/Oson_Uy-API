"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApartmentDto = void 0;
var class_validator_1 = require("class-validator");
var CreateApartmentDto = function () {
    var _a;
    var _projectId_decorators;
    var _projectId_initializers = [];
    var _projectId_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _rooms_decorators;
    var _rooms_initializers = [];
    var _rooms_extraInitializers = [];
    var _area_decorators;
    var _area_initializers = [];
    var _area_extraInitializers = [];
    var _floor_decorators;
    var _floor_initializers = [];
    var _floor_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateApartmentDto() {
                this.projectId = __runInitializers(this, _projectId_initializers, void 0);
                this.price = (__runInitializers(this, _projectId_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                this.rooms = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _rooms_initializers, void 0));
                this.area = (__runInitializers(this, _rooms_extraInitializers), __runInitializers(this, _area_initializers, void 0));
                this.floor = (__runInitializers(this, _area_extraInitializers), __runInitializers(this, _floor_initializers, void 0));
                __runInitializers(this, _floor_extraInitializers);
            }
            return CreateApartmentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _projectId_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsInt)()];
            _price_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsNumber)()];
            _rooms_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsInt)()];
            _area_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsNumber)()];
            _floor_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsInt)()];
            __esDecorate(null, null, _projectId_decorators, { kind: "field", name: "projectId", static: false, private: false, access: { has: function (obj) { return "projectId" in obj; }, get: function (obj) { return obj.projectId; }, set: function (obj, value) { obj.projectId = value; } }, metadata: _metadata }, _projectId_initializers, _projectId_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            __esDecorate(null, null, _rooms_decorators, { kind: "field", name: "rooms", static: false, private: false, access: { has: function (obj) { return "rooms" in obj; }, get: function (obj) { return obj.rooms; }, set: function (obj, value) { obj.rooms = value; } }, metadata: _metadata }, _rooms_initializers, _rooms_extraInitializers);
            __esDecorate(null, null, _area_decorators, { kind: "field", name: "area", static: false, private: false, access: { has: function (obj) { return "area" in obj; }, get: function (obj) { return obj.area; }, set: function (obj, value) { obj.area = value; } }, metadata: _metadata }, _area_initializers, _area_extraInitializers);
            __esDecorate(null, null, _floor_decorators, { kind: "field", name: "floor", static: false, private: false, access: { has: function (obj) { return "floor" in obj; }, get: function (obj) { return obj.floor; }, set: function (obj, value) { obj.floor = value; } }, metadata: _metadata }, _floor_initializers, _floor_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateApartmentDto = CreateApartmentDto;
