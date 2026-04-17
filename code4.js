gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.idToCallbackMap = new Map();
gdjs.game_32overCode.GDbeeObjects1= [];
gdjs.game_32overCode.GDbeeObjects2= [];
gdjs.game_32overCode.GDSmallGreyButtonObjects1= [];
gdjs.game_32overCode.GDSmallGreyButtonObjects2= [];
gdjs.game_32overCode.GDTile_959510_9595tiled_9595spriteObjects1= [];
gdjs.game_32overCode.GDTile_959510_9595tiled_9595spriteObjects2= [];
gdjs.game_32overCode.GDTile_959524Objects1= [];
gdjs.game_32overCode.GDTile_959524Objects2= [];
gdjs.game_32overCode.GDTile_95953_9595tiled_9595spriteObjects1= [];
gdjs.game_32overCode.GDTile_95953_9595tiled_9595spriteObjects2= [];
gdjs.game_32overCode.GDTile_959517Objects1= [];
gdjs.game_32overCode.GDTile_959517Objects2= [];
gdjs.game_32overCode.GDTile_959526Objects1= [];
gdjs.game_32overCode.GDTile_959526Objects2= [];
gdjs.game_32overCode.GDTile_959533_9595tiled_9595spriteObjects1= [];
gdjs.game_32overCode.GDTile_959533_9595tiled_9595spriteObjects2= [];
gdjs.game_32overCode.GDTile_959537Objects1= [];
gdjs.game_32overCode.GDTile_959537Objects2= [];
gdjs.game_32overCode.GDtriggerabajoObjects1= [];
gdjs.game_32overCode.GDtriggerabajoObjects2= [];
gdjs.game_32overCode.GDtriggerarribaObjects1= [];
gdjs.game_32overCode.GDtriggerarribaObjects2= [];
gdjs.game_32overCode.GDNewSprite3Objects1= [];
gdjs.game_32overCode.GDNewSprite3Objects2= [];
gdjs.game_32overCode.GDNewSprite4Objects1= [];
gdjs.game_32overCode.GDNewSprite4Objects2= [];
gdjs.game_32overCode.GDCoinObjects1= [];
gdjs.game_32overCode.GDCoinObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton"), gdjs.game_32overCode.GDSmallGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDSmallGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDSmallGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDSmallGreyButtonObjects1[k] = gdjs.game_32overCode.GDSmallGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDSmallGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena 1", false);
}
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDbeeObjects1.length = 0;
gdjs.game_32overCode.GDbeeObjects2.length = 0;
gdjs.game_32overCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.game_32overCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.game_32overCode.GDTile_959510_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDTile_959510_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDTile_959524Objects1.length = 0;
gdjs.game_32overCode.GDTile_959524Objects2.length = 0;
gdjs.game_32overCode.GDTile_95953_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDTile_95953_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDTile_959517Objects1.length = 0;
gdjs.game_32overCode.GDTile_959517Objects2.length = 0;
gdjs.game_32overCode.GDTile_959526Objects1.length = 0;
gdjs.game_32overCode.GDTile_959526Objects2.length = 0;
gdjs.game_32overCode.GDTile_959533_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDTile_959533_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDTile_959537Objects1.length = 0;
gdjs.game_32overCode.GDTile_959537Objects2.length = 0;
gdjs.game_32overCode.GDtriggerabajoObjects1.length = 0;
gdjs.game_32overCode.GDtriggerabajoObjects2.length = 0;
gdjs.game_32overCode.GDtriggerarribaObjects1.length = 0;
gdjs.game_32overCode.GDtriggerarribaObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects2.length = 0;
gdjs.game_32overCode.GDCoinObjects1.length = 0;
gdjs.game_32overCode.GDCoinObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDbeeObjects1.length = 0;
gdjs.game_32overCode.GDbeeObjects2.length = 0;
gdjs.game_32overCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.game_32overCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.game_32overCode.GDTile_959510_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDTile_959510_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDTile_959524Objects1.length = 0;
gdjs.game_32overCode.GDTile_959524Objects2.length = 0;
gdjs.game_32overCode.GDTile_95953_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDTile_95953_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDTile_959517Objects1.length = 0;
gdjs.game_32overCode.GDTile_959517Objects2.length = 0;
gdjs.game_32overCode.GDTile_959526Objects1.length = 0;
gdjs.game_32overCode.GDTile_959526Objects2.length = 0;
gdjs.game_32overCode.GDTile_959533_9595tiled_9595spriteObjects1.length = 0;
gdjs.game_32overCode.GDTile_959533_9595tiled_9595spriteObjects2.length = 0;
gdjs.game_32overCode.GDTile_959537Objects1.length = 0;
gdjs.game_32overCode.GDTile_959537Objects2.length = 0;
gdjs.game_32overCode.GDtriggerabajoObjects1.length = 0;
gdjs.game_32overCode.GDtriggerabajoObjects2.length = 0;
gdjs.game_32overCode.GDtriggerarribaObjects1.length = 0;
gdjs.game_32overCode.GDtriggerarribaObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects2.length = 0;
gdjs.game_32overCode.GDCoinObjects1.length = 0;
gdjs.game_32overCode.GDCoinObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
