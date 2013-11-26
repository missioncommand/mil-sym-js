var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

armyc2.c2sd.renderer.utilities.RendererException = function (message, throwable) {

	throwable.message += " - " + message;
	return throwable;

};