import {ParjsBaseParserAction} from "../../../base/action";
/**
 * Created by lifeg on 24/11/2016.
 */

export class PrsFail extends ParjsBaseParserAction {
    displayName = "fail";
    expecting = "no input";
    _apply(ps : ParsingState) {
        ps.result =  ResultKind.SoftFail;
    }
}