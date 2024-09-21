'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nesjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' : 'data-bs-target="#xs-controllers-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' :
                                            'id="xs-controllers-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' :
                                        'id="xs-injectables-links-module-AppModule-655aaf68a219096c2eb70a4ad7c8e0e78d937bc9f24b54e49b89e04eaf8b4c280c25114377866a93cd7c1b38492557e9be256c5bdb963b76d8d7c372f40a898a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' :
                                            'id="xs-controllers-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' :
                                        'id="xs-injectables-links-module-AuthModule-e200b7516475768697088fcf0f5bd48cfbd4bfce9a64728e6228af73880b4bb9274428229969b2657105cccd320d710694f0ff064d039abd1b9c6b83bca7bc65"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-a42e6cda94e263b702c84b82ec67b6d433fb83d70358abb0a271f356836e9bab2adac09e021281796eb914ef2324cea5ccc811c6f83f876b2b708173c8a26d4c"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' :
                                            'id="xs-controllers-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' :
                                        'id="xs-injectables-links-module-PostsModule-ceee51f1da28c3ab79558f3892c17385bdc715fb5716140ce3ebcf90f2afe884adaa2a578d63757e799393762d3e2f0eb2f251b44fd9d2ceecc1cb4f6c36f050"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-456decee375532137ed1b983633afcb3112f685f9f0963d8d6086d6b4efcd916197b38d28e43854787cde6c098852d37976b86d0cd44d8d5510f558e97c427a6"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-456decee375532137ed1b983633afcb3112f685f9f0963d8d6086d6b4efcd916197b38d28e43854787cde6c098852d37976b86d0cd44d8d5510f558e97c427a6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-456decee375532137ed1b983633afcb3112f685f9f0963d8d6086d6b4efcd916197b38d28e43854787cde6c098852d37976b86d0cd44d8d5510f558e97c427a6"' :
                                            'id="xs-controllers-links-module-TagsModule-456decee375532137ed1b983633afcb3112f685f9f0963d8d6086d6b4efcd916197b38d28e43854787cde6c098852d37976b86d0cd44d8d5510f558e97c427a6"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' :
                                            'id="xs-controllers-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' :
                                        'id="xs-injectables-links-module-UsersModule-a97452cb8764ada47822ebbb1e459475dec77e3e1b9b1595759465dd6a5b2d2ced4f58ca5fec45ff155d9df91120e117327033b9b4870e431b574d5a0641e3f6"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostsDto.html" data-type="entity-link" >CreatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostsDto.html" data-type="entity-link" >PatchPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});