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
exports.CreateProjectDto = void 0;
var class_validator_1 = require("class-validator");
var CreateProjectDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _deliveryDate_decorators;
    var _deliveryDate_initializers = [];
    var _deliveryDate_extraInitializers = [];
    var _developerId_decorators;
    var _developerId_initializers = [];
    var _developerId_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateProjectDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.location = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _location_initializers, void 0));
                this.deliveryDate = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _deliveryDate_initializers, void 0));
                this.developerId = (__runInitializers(this, _deliveryDate_extraInitializers), __runInitializers(this, _developerId_initializers, void 0));
                __runInitializers(this, _developerId_extraInitializers);
            }
            return CreateProjectDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _location_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _deliveryDate_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _developerId_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsInt)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _deliveryDate_decorators, { kind: "field", name: "deliveryDate", static: false, private: false, access: { has: function (obj) { return "deliveryDate" in obj; }, get: function (obj) { return obj.deliveryDate; }, set: function (obj, value) { obj.deliveryDate = value; } }, metadata: _metadata }, _deliveryDate_initializers, _deliveryDate_extraInitializers);
            __esDecorate(null, null, _developerId_decorators, { kind: "field", name: "developerId", static: false, private: false, access: { has: function (obj) { return "developerId" in obj; }, get: function (obj) { return obj.developerId; }, set: function (obj, value) { obj.developerId = value; } }, metadata: _metadata }, _developerId_initializers, _developerId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateProjectDto = CreateProjectDto;
