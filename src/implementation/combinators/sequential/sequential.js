"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var action_1 = require("../../../base/action");
/**
 * Created by User on 21-Nov-16.
 */
var PrsSeq = (function (_super) {
    __extends(PrsSeq, _super);
    function PrsSeq(parsers) {
        _super.call(this);
        this.parsers = parsers;
        this.isLoud = true;
        this.displayName = "seq";
        if (parsers.length === 0) {
            this.expecting = "anything";
        }
        else {
            this.expecting = parsers[0].expecting;
        }
    }
    PrsSeq.prototype._apply = function (ps) {
        var parsers = this.parsers;
        var results = [];
        for (var i = 0; i < parsers.length; i++) {
            var cur = parsers[i];
            cur.apply(ps);
            if (ps.isOk) {
                results.maybePush(ps.value);
            }
            else if (ps.isSoft && i === 0) {
                return;
            }
            else if (ps.isSoft) {
                ps.result = ResultKind.HardFail;
                return;
            }
            else {
                return;
            }
        }
        ps.value = results;
        ps.result = ResultKind.OK;
    };
    return PrsSeq;
}(action_1.ParjsParserAction));
exports.PrsSeq = PrsSeq;
//# sourceMappingURL=sequential.js.map