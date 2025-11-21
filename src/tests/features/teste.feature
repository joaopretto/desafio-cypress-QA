Feature: HomePageTest

    @auth
    Scenario: Testar requisicao de Login DummyJson teste de API
        Given faco login com um usuario valido
         When faco uma chamada na requisicao GET para "/auth/me"
         Then a reposta deve ser 200
          And o valor do campo "firstName" deve ser "Emily"

    Scenario: Fazer login no saucedemo.com
        Given eu acesso a pagina de login
         When preencho os campos com o usuario "standard_user" e senha "secret_sauce"
          And clico no botao de confirmar
         Then devo ser direcionado para a pagina "/inventory.html"

    Scenario: Adicionar produtos ao carrinho no saucedemo
        Given eu acesso a pagina de login
         When preencho os campos com o usuario "standard_user" e senha "secret_sauce"
          And clico no botao de confirmar
         Then devo ser direcionado para a pagina "/inventory.html"
         When adiciono os produtos abaixo ao carrinho
              | nome do produto          |
              | Sauce Labs Backpack      |
              | Sauce Labs Bolt T-Shirt  |
              | Sauce Labs Onesie        |
          And clico no carrinho de compras
         Then valido se os produtos abaixo foram adicionados no carrinho
              | nome do produto          |
              | Sauce Labs Backpack      |
              | Sauce Labs Bolt T-Shirt  |
              | Sauce Labs Onesie        |