<<<<<<<< HEAD:public/assets/database_IndexedDB_03接口.md.CKjh9TWm.js
import{_ as e,c as a,o as t,a2 as r}from"./chunks/framework.Bc4oNHcE.js";const o="/assets/0189a3dd-3c13-4fb8-ab6d-1811176e1e12.razLcKOT.png",s="/assets/c8eddf85-eb70-4e4e-ae2a-9e28ce51c88c.aQDPDqhg.png",d="/assets/30fa302a-225f-482c-8b4c-5e5a7a281e26.D4Q-SI3r.png",n="/assets/6cac5100-86e8-46ca-ac5a-eb54658b1559.BjIJCJb_.png",i="/assets/d981a8af-4885-4e7c-be17-1c37b25134c9.CHl6OsYZ.png",c="/assets/866d8487-953e-4b37-8053-c6df6ddbdac7.KBLXrRHJ.png",m=JSON.parse('{"title":"03接口","description":"","frontmatter":{"layout":"doc","title":"03接口"},"headers":[],"relativePath":"database/IndexedDB/03接口.md","filePath":"database/IndexedDB/03接口.md"}'),b={name:"database/IndexedDB/03接口.md"},p=r('<h1 id="indexeddb的接口" tabindex="-1">indexedDB的接口 <a class="header-anchor" href="#indexeddb的接口" aria-label="Permalink to &quot;indexedDB的接口&quot;">​</a></h1><h2 id="idbcursor" tabindex="-1">IDBCursor <a class="header-anchor" href="#idbcursor" aria-label="Permalink to &quot;IDBCursor&quot;">​</a></h2><p>IDBCursor 接口表示一个游标，用于遍历或迭代数据库中的多条记录</p><p>游标有一个源，指示需要遍历哪一个索引或者对象存储区。它在所属区间范围内有一个位置，根据记录健（存储字段）的顺序递增或递减方向移动。游标使应用程序能够异步处理在游标范围内的所有记录</p><p><img src="'+o+'" alt="IDBCursor"></p><h2 id="idbdatabase" tabindex="-1">IDBDatabase <a class="header-anchor" href="#idbdatabase" aria-label="Permalink to &quot;IDBDatabase&quot;">​</a></h2><p>提供一个到 数据库的连接; 你可以使用 IDBDatabase 对象在数据库中打开一个transaction , 然后进行操作或者删除数据库中的对象。这是唯一一个能够访问和管理数据库版本的接口。</p><p><img src="'+s+'" alt="IDBDatabase"></p><h2 id="idbfactory" tabindex="-1">IDBFactory <a class="header-anchor" href="#idbfactory" aria-label="Permalink to &quot;IDBFactory&quot;">​</a></h2><p>让程序可以异步存取 indexed databases,你可以通过这个对象而不是直接使用IDBFactory接口打开——创建或者连接——和删除一个数据库。</p><p><img src="'+d+'" alt="IDBFactory"></p><h2 id="idbindex" tabindex="-1">IDBIndex <a class="header-anchor" href="#idbindex" aria-label="Permalink to &quot;IDBIndex&quot;">​</a></h2><p>提供了异步获取数据库中一个index的功能。index 是一种用于在另一个 object store 中查找记录的 object store，其被称为被引用的 object store。你可以通过使用该接口来取回数据。</p><p>index 是一个持久的键 - 值存储，其中其记录的值部分是被引用 object store 中的 record 的关键部分。在 object store 中新增、更新或是删除 records 时，索引中的 records 将自动填充。索引中的每条记录只能指向其引用的 object store 中的唯一一条记录，但是多个索引可以引用同一个 object store。当 object store 变更时，所有引用 object store 的索引都会自动更新。</p><p><img src="'+n+'" alt="IDBIndex"></p><h2 id="idbkeyrange" tabindex="-1">IDBKeyRange <a class="header-anchor" href="#idbkeyrange" aria-label="Permalink to &quot;IDBKeyRange&quot;">​</a></h2><p>表示一些数据类型上的键的连续间隔。可以使用一个键或某个范围的键从IDBObjectStore 和IDBIndex 对象中检索记录。你也可以指定键的上界和下界来限制范围</p><p>键范围可以是单个值，也可以是具有上界、下界或端点的范围。如果键范围同时有上界或下界，那么它是有界的，否则是无界的。有界键范围可以是开放的（不包含端点）或闭合的（包含了端点）。要检索一定范围内的所有键值，可以使用以下的代码结构：</p><p><img src="'+i+'" alt="IDBKeyRange"></p><h2 id="idbobjectstore" tabindex="-1">IDBObjectStore <a class="header-anchor" href="#idbobjectstore" aria-label="Permalink to &quot;IDBObjectStore&quot;">​</a></h2><p>IDBObjectStore 接口表示数据库中的 一个 对象库 (object store) 。对象库中的记录根据其键值进行排序。这种排序可以实现快速插入，查找和有序检索</p><p>为了方便理解，可以把“对象存储空间”想象成关系数据库的“表”结构，下文也会把对象存储空间称为表</p><p><img src="'+c+'" alt="IDBObjectStore"></p><h2 id="idbopendbrequest" tabindex="-1">IDBOpenDBRequest <a class="header-anchor" href="#idbopendbrequest" aria-label="Permalink to &quot;IDBOpenDBRequest&quot;">​</a></h2><p>IndexedDB API的IDBOpenDBRequest接口提供了对打开或删除数据库请求结果的访问(使用IDBFactory执行)。open和IDBFactory.deleteDatabase，使用特定的事件处理程序属性 事件： blocked 当打开的数据库连接阻止同一数据库上的版本更改事务时触发。也可以通过onblocked属性获得。</p><p>事件： upgradeneeded 当尝试打开版本号高于其当前版本的数据库时触发。也可以通过onupgradenneeded属性获得。</p><h2 id="idbrequest" tabindex="-1">IDBRequest <a class="header-anchor" href="#idbrequest" aria-label="Permalink to &quot;IDBRequest&quot;">​</a></h2><p>提供了根据绑定事件处理函数访问结果集的方法。其中结果集来自对数据库和数据库对象发起的异步查询。对数据库的读写操作都是通过 request 的方式来实现</p><p>request 对象初始时不包括任何关于操作结果的信息，当 request 上的事件触发时，可以通过 IDBRequest 实例上的事件处理函数访问相关信息</p><p>所有的异步方法返回一个 request 对象。如果 request 对象成功执行了，结果可以通过 result 属性访问到，并且该 request 对象上会触发 success 事件。如果操作中有错误发生，一个 error 事件会触发，并且会通过 result 属性抛出一个异常。</p><h2 id="idbtransaction" tabindex="-1">IDBTransaction <a class="header-anchor" href="#idbtransaction" aria-label="Permalink to &quot;IDBTransaction&quot;">​</a></h2><p>异步事务使用数据库中的事件对象属性。所有的读取和写入数据均在事务中完成。由IDBDatabase发起事务，通过IDBTransaction 来设置事务的模式（例如：是否只读readonly或读写readwrite），以及通过IDBObjectStore来发起一个请求。同时你也可以使用它来中止事务</p><h2 id="idbversionchangeevent" tabindex="-1">IDBVersionChangeEvent <a class="header-anchor" href="#idbversionchangeevent" aria-label="Permalink to &quot;IDBVersionChangeEvent&quot;">​</a></h2><p>IndexedDB API的IDBVersionChangeEvent接口指示数据库的版本发生了变化，这是onupgradenrequired事件处理函数的结果。继承自Event</p><p>只有2个属性</p><ul><li>oldVersion</li><li>newVersion</li></ul>',36),l=[p];function h(D,u,I,B,_,q){return t(),a("div",null,l)}const f=e(b,[["render",h]]);export{m as __pageData,f as default};
========
import{_ as e,c as a,o as t,a2 as r}from"./chunks/framework.Bc4oNHcE.js";const o="/assets/a8f183e5-9bb2-4b1e-b4f1-0fc0f63abbfa.razLcKOT.png",s="/assets/c36b2499-54ae-44bd-8cab-aeb54f3afdab.aQDPDqhg.png",d="/assets/887890bd-a208-4b2c-835f-07dde2e50e22.D4Q-SI3r.png",n="/assets/16892cdc-8935-4e12-aa79-03f2e9b6f01e.BjIJCJb_.png",i="/assets/8c7e4a79-8e82-4f29-9f95-6fe741c1af29.CHl6OsYZ.png",c="/assets/86d0d63f-2567-4298-956f-ef269d76ab0c.KBLXrRHJ.png",x=JSON.parse('{"title":"03接口","description":"","frontmatter":{"layout":"doc","title":"03接口"},"headers":[],"relativePath":"database/IndexedDB/03接口.md","filePath":"database/IndexedDB/03接口.md"}'),b={name:"database/IndexedDB/03接口.md"},p=r('<h1 id="indexeddb的接口" tabindex="-1">indexedDB的接口 <a class="header-anchor" href="#indexeddb的接口" aria-label="Permalink to &quot;indexedDB的接口&quot;">​</a></h1><h2 id="idbcursor" tabindex="-1">IDBCursor <a class="header-anchor" href="#idbcursor" aria-label="Permalink to &quot;IDBCursor&quot;">​</a></h2><p>IDBCursor 接口表示一个游标，用于遍历或迭代数据库中的多条记录</p><p>游标有一个源，指示需要遍历哪一个索引或者对象存储区。它在所属区间范围内有一个位置，根据记录健（存储字段）的顺序递增或递减方向移动。游标使应用程序能够异步处理在游标范围内的所有记录</p><p><img src="'+o+'" alt="IDBCursor"></p><h2 id="idbdatabase" tabindex="-1">IDBDatabase <a class="header-anchor" href="#idbdatabase" aria-label="Permalink to &quot;IDBDatabase&quot;">​</a></h2><p>提供一个到 数据库的连接; 你可以使用 IDBDatabase 对象在数据库中打开一个transaction , 然后进行操作或者删除数据库中的对象。这是唯一一个能够访问和管理数据库版本的接口。</p><p><img src="'+s+'" alt="IDBDatabase"></p><h2 id="idbfactory" tabindex="-1">IDBFactory <a class="header-anchor" href="#idbfactory" aria-label="Permalink to &quot;IDBFactory&quot;">​</a></h2><p>让程序可以异步存取 indexed databases,你可以通过这个对象而不是直接使用IDBFactory接口打开——创建或者连接——和删除一个数据库。</p><p><img src="'+d+'" alt="IDBFactory"></p><h2 id="idbindex" tabindex="-1">IDBIndex <a class="header-anchor" href="#idbindex" aria-label="Permalink to &quot;IDBIndex&quot;">​</a></h2><p>提供了异步获取数据库中一个index的功能。index 是一种用于在另一个 object store 中查找记录的 object store，其被称为被引用的 object store。你可以通过使用该接口来取回数据。</p><p>index 是一个持久的键 - 值存储，其中其记录的值部分是被引用 object store 中的 record 的关键部分。在 object store 中新增、更新或是删除 records 时，索引中的 records 将自动填充。索引中的每条记录只能指向其引用的 object store 中的唯一一条记录，但是多个索引可以引用同一个 object store。当 object store 变更时，所有引用 object store 的索引都会自动更新。</p><p><img src="'+n+'" alt="IDBIndex"></p><h2 id="idbkeyrange" tabindex="-1">IDBKeyRange <a class="header-anchor" href="#idbkeyrange" aria-label="Permalink to &quot;IDBKeyRange&quot;">​</a></h2><p>表示一些数据类型上的键的连续间隔。可以使用一个键或某个范围的键从IDBObjectStore 和IDBIndex 对象中检索记录。你也可以指定键的上界和下界来限制范围</p><p>键范围可以是单个值，也可以是具有上界、下界或端点的范围。如果键范围同时有上界或下界，那么它是有界的，否则是无界的。有界键范围可以是开放的（不包含端点）或闭合的（包含了端点）。要检索一定范围内的所有键值，可以使用以下的代码结构：</p><p><img src="'+i+'" alt="IDBKeyRange"></p><h2 id="idbobjectstore" tabindex="-1">IDBObjectStore <a class="header-anchor" href="#idbobjectstore" aria-label="Permalink to &quot;IDBObjectStore&quot;">​</a></h2><p>IDBObjectStore 接口表示数据库中的 一个 对象库 (object store) 。对象库中的记录根据其键值进行排序。这种排序可以实现快速插入，查找和有序检索</p><p>为了方便理解，可以把“对象存储空间”想象成关系数据库的“表”结构，下文也会把对象存储空间称为表</p><p><img src="'+c+'" alt="IDBObjectStore"></p><h2 id="idbopendbrequest" tabindex="-1">IDBOpenDBRequest <a class="header-anchor" href="#idbopendbrequest" aria-label="Permalink to &quot;IDBOpenDBRequest&quot;">​</a></h2><p>IndexedDB API的IDBOpenDBRequest接口提供了对打开或删除数据库请求结果的访问(使用IDBFactory执行)。open和IDBFactory.deleteDatabase，使用特定的事件处理程序属性 事件： blocked 当打开的数据库连接阻止同一数据库上的版本更改事务时触发。也可以通过onblocked属性获得。</p><p>事件： upgradeneeded 当尝试打开版本号高于其当前版本的数据库时触发。也可以通过onupgradenneeded属性获得。</p><h2 id="idbrequest" tabindex="-1">IDBRequest <a class="header-anchor" href="#idbrequest" aria-label="Permalink to &quot;IDBRequest&quot;">​</a></h2><p>提供了根据绑定事件处理函数访问结果集的方法。其中结果集来自对数据库和数据库对象发起的异步查询。对数据库的读写操作都是通过 request 的方式来实现</p><p>request 对象初始时不包括任何关于操作结果的信息，当 request 上的事件触发时，可以通过 IDBRequest 实例上的事件处理函数访问相关信息</p><p>所有的异步方法返回一个 request 对象。如果 request 对象成功执行了，结果可以通过 result 属性访问到，并且该 request 对象上会触发 success 事件。如果操作中有错误发生，一个 error 事件会触发，并且会通过 result 属性抛出一个异常。</p><h2 id="idbtransaction" tabindex="-1">IDBTransaction <a class="header-anchor" href="#idbtransaction" aria-label="Permalink to &quot;IDBTransaction&quot;">​</a></h2><p>异步事务使用数据库中的事件对象属性。所有的读取和写入数据均在事务中完成。由IDBDatabase发起事务，通过IDBTransaction 来设置事务的模式（例如：是否只读readonly或读写readwrite），以及通过IDBObjectStore来发起一个请求。同时你也可以使用它来中止事务</p><h2 id="idbversionchangeevent" tabindex="-1">IDBVersionChangeEvent <a class="header-anchor" href="#idbversionchangeevent" aria-label="Permalink to &quot;IDBVersionChangeEvent&quot;">​</a></h2><p>IndexedDB API的IDBVersionChangeEvent接口指示数据库的版本发生了变化，这是onupgradenrequired事件处理函数的结果。继承自Event</p><p>只有2个属性</p><ul><li>oldVersion</li><li>newVersion</li></ul>',36),l=[p];function h(D,u,I,B,_,q){return t(),a("div",null,l)}const m=e(b,[["render",h]]);export{x as __pageData,m as default};
>>>>>>>> githubmaster:public/assets/database_IndexedDB_03接口.md.D9AS5__X.js
