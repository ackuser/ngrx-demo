(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"u/qA":function(e,l,t){"use strict";t.r(l);var n=t("8Y7J");class o{}var E,a=t("pMnS"),u=t("SVse"),s=t("LQtZ"),c=t("n+eT"),r=t("s7LF"),i=t("gJJk"),p=t("fy4A"),b=t("RLuz");!function(e){e.CRUD2_EMPLOYEE_LOAD_REQUEST="[CRUD2 Page] Load Employee Request",e.CRUD2_EMPLOYEE_LOAD_SUCCESS="[CRUD2 Page] Load Employee Success",e.CRUD2_EMPLOYEE_CREATE_REQUEST="[CRUD2 Page] Create Employee Request",e.CRUD2_EMPLOYEE_UPDATE_REQUEST="[CRUD2 Page] Update Employee Request",e.CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS="[CRUD2 Page] Create or Update Employee Success",e.CRUD2_EMPLOYEE_DELETE_REQUEST="[CRUD2 Page] Delete Employee Request",e.CRUD2_EMPLOYEE_DELETE_SUCCESS="[CRUD2 Page] Delete Employee Success",e.CRUD2_EMPLOYEE_FAILURE="[CRUD2 Page] Employee Failure"}(E||(E={})),Object(b.d)(E);class d{constructor(){this.type=E.CRUD2_EMPLOYEE_LOAD_REQUEST}}class y{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_LOAD_SUCCESS}}class m{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_CREATE_REQUEST}}class O{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_UPDATE_REQUEST}}class _{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS}}class U{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_DELETE_REQUEST}}class R{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_DELETE_SUCCESS}}class C{constructor(e){this.payload=e,this.type=E.CRUD2_EMPLOYEE_FAILURE}}var h=t("DRwZ");const D=Object(h.a)({sortComparer:function(e,l){return e.name.localeCompare(l.name)}}),S=D.getInitialState({isLoading:!1,error:null}),{selectAll:L}=D.getSelectors();var j=t("DQLy");const f=Object(j.B)("crud2"),g=Object(j.D)(f,e=>e.error),P=Object(j.D)(f,e=>e.isLoading),T=Object(j.D)(f,L);class v{}class A{constructor(e){this.store$=e,this.isLoading$=this.store$.pipe(Object(j.E)(P)),this.employees$=this.store$.pipe(Object(j.E)(T)),this.errorMessage$=this.store$.pipe(Object(j.E)(g))}loadAllEmployee(){this.store$.dispatch(new d)}addEmployee(e){e.id=null,this.store$.dispatch(new m(e))}updateEmployee(e){this.store$.dispatch(new O(e))}deleteEmployee(e){this.store$.dispatch(new U(e))}}A.ngInjectableDef=n.Q({factory:function(){return new A(n.U(j.n))},token:A,providedIn:v});class M{constructor(e){this.crud2StoreFacade=e,this.isEditing=!1}ngOnInit(){this.crud2StoreFacade.loadAllEmployee(),this.isLoading$=this.crud2StoreFacade.isLoading$,this.employees$=this.crud2StoreFacade.employees$,this.errorMessage$=this.crud2StoreFacade.errorMessage$}onAddEmployee(e){this.crud2StoreFacade.addEmployee(e)}onUpdateEmployee(e){this.crud2StoreFacade.updateEmployee(e)}onEditEmployee(e){this.isEditing=!0,this.employeeToEdit=e}onDeleteEmployee(e){this.crud2StoreFacade.deleteEmployee(e)}onCancel(e){this.isEditing=e,this.employeeToEdit=null}}var $=n.lb({encapsulation:0,styles:[[""]],data:{}});function Y(e){return n.Cb(0,[(e()(),n.nb(0,0,null,null,1,null,null,null,null,null,null,null)),(e()(),n.nb(1,0,null,null,0,"div",[["class","loader"]],null,null,null,null,null))],null,null)}function w(e){return n.Cb(0,[(e()(),n.nb(0,0,null,null,2,"div",[["class","alert-error"]],null,null,null,null,null)),(e()(),n.Ab(1,null,[" ","\n"])),n.wb(131072,u.b,[n.h])],null,function(e,l){var t=l.component;e(l,1,0,n.Bb(l,1,0,n.vb(l,2).transform(t.errorMessage$)))})}function F(e){return n.Cb(0,[(e()(),n.nb(0,0,null,null,2,"div",[["style","text-align:center"]],null,null,null,null,null)),(e()(),n.nb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),n.Ab(-1,null,["Demo 7 - @ngrx/entity CRUD with Facade Pattern"])),(e()(),n.eb(16777216,null,null,2,null,Y)),n.mb(4,16384,null,0,u.k,[n.M,n.J],{ngIf:[0,"ngIf"]},null),n.wb(131072,u.b,[n.h]),(e()(),n.nb(6,0,null,null,7,"div",[["class","main"]],null,null,null,null,null)),(e()(),n.nb(7,0,null,null,2,"div",[["class","formbg"]],null,null,null,null,null)),(e()(),n.nb(8,0,null,null,1,"app-employee-form",[],null,[[null,"cancel"],[null,"addEmployee"],[null,"updateEmployee"]],function(e,l,t){var n=!0,o=e.component;return"cancel"===l&&(n=!1!==o.onCancel(t)&&n),"addEmployee"===l&&(n=!1!==o.onAddEmployee(t)&&n),"updateEmployee"===l&&(n=!1!==o.onUpdateEmployee(t)&&n),n},s.b,s.a)),n.mb(9,638976,null,0,c.a,[r.d],{employeeToEdit:[0,"employeeToEdit"],isEditing:[1,"isEditing"]},{addEmployee:"addEmployee",updateEmployee:"updateEmployee",cancel:"cancel"}),(e()(),n.nb(10,0,null,null,3,"div",[["class","tablebg"]],null,null,null,null,null)),(e()(),n.nb(11,0,null,null,2,"app-employee-table",[],null,[[null,"editEmployee"],[null,"deleteEmployee"]],function(e,l,t){var n=!0,o=e.component;return"editEmployee"===l&&(n=!1!==o.onEditEmployee(t)&&n),"deleteEmployee"===l&&(n=!1!==o.onDeleteEmployee(t)&&n),n},i.b,i.a)),n.mb(12,49152,null,0,p.a,[],{employees:[0,"employees"]},{editEmployee:"editEmployee",deleteEmployee:"deleteEmployee"}),n.wb(131072,u.b,[n.h]),(e()(),n.eb(16777216,null,null,2,null,w)),n.mb(15,16384,null,0,u.k,[n.M,n.J],{ngIf:[0,"ngIf"]},null),n.wb(131072,u.b,[n.h])],function(e,l){var t=l.component;e(l,4,0,n.Bb(l,4,0,n.vb(l,5).transform(t.isLoading$))),e(l,9,0,t.employeeToEdit,t.isEditing),e(l,12,0,n.Bb(l,12,0,n.vb(l,13).transform(t.employees$))),e(l,15,0,n.Bb(l,15,0,n.vb(l,16).transform(t.errorMessage$)))},null)}function Q(e){return n.Cb(0,[(e()(),n.nb(0,0,null,null,1,"app-crud2",[],null,null,null,F,$)),n.mb(1,114688,null,0,M,[A],null,null)],function(e,l){e(l,1,0)},null)}var I=n.jb("app-crud2",M,Q,{},{},[]),q=t("IheW"),J=t("JVVJ"),k=t("lvq+"),B=t("a1A6"),z=t("PCNd"),N=t("42sd");function V(e=S,l){switch(l.type){case E.CRUD2_EMPLOYEE_LOAD_REQUEST:case E.CRUD2_EMPLOYEE_CREATE_REQUEST:case E.CRUD2_EMPLOYEE_UPDATE_REQUEST:case E.CRUD2_EMPLOYEE_DELETE_REQUEST:return Object.assign({},e,{isLoading:!0,error:null});case E.CRUD2_EMPLOYEE_LOAD_SUCCESS:return D.addAll(l.payload,Object.assign({},e,{isLoading:!1,error:null}));case E.CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS:return D.upsertOne(l.payload,Object.assign({},e,{isLoading:!1,error:null}));case E.CRUD2_EMPLOYEE_DELETE_SUCCESS:return D.removeOne(l.payload,Object.assign({},e,{isLoading:!1,error:null}));case E.CRUD2_EMPLOYEE_FAILURE:return Object.assign({},e,{isLoading:!1,error:l.payload});default:return e}}var x=t("mrSG"),G=t("Yml6"),X=t("LRne"),Z=t("HDdC"),H=t("eIep"),K=t("lJxs"),W=t("JIr8"),ee=t("bOdf");class le{constructor(e,l){this.employeeService=e,this.actions$=l,this.loadAllEmployeeEffects$=this.actions$.pipe(Object(G.e)(E.CRUD2_EMPLOYEE_LOAD_REQUEST),Object(H.a)(()=>this.employeeService.getEmployees().pipe(Object(K.a)(e=>new y(e)),Object(W.a)(e=>Object(X.a)(new C(e)))))),this.createEmployeeEffects$=this.actions$.pipe(Object(G.e)(E.CRUD2_EMPLOYEE_CREATE_REQUEST),Object(K.a)(e=>e.payload),Object(ee.a)(e=>this.employeeService.createEmployee(e).pipe(Object(K.a)(e=>new _(e)),Object(W.a)(e=>Object(X.a)(new C(e)))))),this.updateEmployeeEffects$=this.actions$.pipe(Object(G.e)(E.CRUD2_EMPLOYEE_UPDATE_REQUEST),Object(K.a)(e=>e.payload),Object(ee.a)(e=>this.employeeService.updateEmployee(e).pipe(Object(K.a)(()=>new _(e)),Object(W.a)(e=>Object(X.a)(new C(e)))))),this.deleteEmployeeEffects$=this.actions$.pipe(Object(G.e)(E.CRUD2_EMPLOYEE_DELETE_REQUEST),Object(K.a)(e=>e.payload),Object(ee.a)(e=>this.employeeService.removeEmployee(e).pipe(Object(K.a)(()=>new R(e)),Object(W.a)(e=>Object(X.a)(new C(e))))))}}Object(x.a)([Object(G.b)(),Object(x.c)("design:type",Z.a)],le.prototype,"loadAllEmployeeEffects$",void 0),Object(x.a)([Object(G.b)(),Object(x.c)("design:type",Z.a)],le.prototype,"createEmployeeEffects$",void 0),Object(x.a)([Object(G.b)(),Object(x.c)("design:type",Z.a)],le.prototype,"updateEmployeeEffects$",void 0),Object(x.a)([Object(G.b)(),Object(x.c)("design:type",Z.a)],le.prototype,"deleteEmployeeEffects$",void 0);var te=t("QzFV"),ne=t("iInd");class oe{}oe.components=[M],t.d(l,"Crud2ModuleNgFactory",function(){return Ee});var Ee=n.kb(o,[],function(e){return n.tb([n.ub(512,n.j,n.Z,[[8,[a.a,I]],[3,n.j],n.v]),n.ub(4608,u.m,u.l,[n.s,[2,u.s]]),n.ub(4608,r.d,r.d,[]),n.ub(4608,r.q,r.q,[]),n.ub(4608,q.k,q.q,[u.d,n.z,q.o]),n.ub(4608,q.r,q.r,[q.k,q.p]),n.ub(5120,q.a,function(e){return[e]},[q.r]),n.ub(4608,J.b,k.a,[]),n.ub(4608,q.n,q.n,[]),n.ub(6144,q.l,null,[q.n]),n.ub(5120,q.b,B.b,[J.b,J.a,q.l]),n.ub(4608,q.f,q.m,[q.b,n.p]),n.ub(4608,q.c,q.c,[q.f]),n.ub(4608,q.j,q.j,[q.l]),n.ub(1073742336,u.c,u.c,[]),n.ub(1073742336,r.o,r.o,[]),n.ub(1073742336,r.m,r.m,[]),n.ub(1073742336,z.a,z.a,[]),n.ub(1073742336,q.e,q.e,[]),n.ub(1073742336,q.d,q.d,[]),n.ub(1073742336,B.a,B.a,[]),n.ub(1073742336,N.a,N.a,[]),n.ub(1024,j.F,function(){return[{}]},[]),n.ub(1024,j.j,function(){return[{key:"crud2",reducerFactory:j.z,metaReducers:[],initialState:void 0}]},[]),n.ub(1024,j.G,j.H,[n.p,j.F,j.j]),n.ub(1024,j.q,function(){return[V]},[]),n.ub(1024,j.r,function(e){return[e]},[j.q]),n.ub(1024,j.b,function(e,l,t){return[j.w(e,l,t)]},[n.p,j.q,j.r]),n.ub(1073873408,j.o,j.o,[j.G,j.b,j.g,j.p]),n.ub(512,le,le,[te.a,G.a]),n.ub(1024,G.j,function(e){return[G.f(e)]},[le]),n.ub(1073742336,G.h,G.h,[G.g,G.j,[2,j.p],[2,j.o]]),n.ub(1073742336,v,v,[]),n.ub(1073742336,ne.p,ne.p,[[2,ne.w],[2,ne.o]]),n.ub(1073742336,oe,oe,[]),n.ub(1073742336,o,o,[]),n.ub(256,q.o,"XSRF-TOKEN",[]),n.ub(256,q.p,"X-XSRF-TOKEN",[]),n.ub(256,J.a,{delay:500},[]),n.ub(1024,ne.m,function(){return[[{path:"",component:M}]]},[])])})}}]);