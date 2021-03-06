NEJ.define([
  'base/klass',
  'base/element',
  'base/util',
  'util/template/tpl',
  'util/list/page',
  'pro/common/module',
  'pro/cache/pg_cache',
  '{lib}/../../regularjs/dist/regular.js'
], function (_k, _e, _u, _l, _t, _m, _pgCache, _r, _p, _pro) {
  /**
   * 项目组树模块
   * @class   {wd.m._$$ModulespecHome}
   * @extends {nej.ut._$$AbstractModule}
   */
  _p._$$ModulespecHome = _k._$klass();
  _pro = _p._$$ModulespecHome._$extend(_m._$$Module);

  /**
   * 构建模块
   * @return {Void}
   */
  _pro.__doBuild = function () {
    this.__super();
    this.__body = _e._$html2node(
      _l._$getTextTemplate('module-spec-home')
    );
  };

  /**
   * 刷新模块
   * @param  {Object} _options 配置信息
   * @return {Void}
   */
  _pro.__onRefresh = function (_options) {
    this.__super(_options);
  };

  // notify dispatcher
  _m._$regist(
    'spec-home',
    _p._$$ModulespecHome
  );
});
