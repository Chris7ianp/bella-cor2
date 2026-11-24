# Bella Cor — Bronze e Estética

Landing page institucional desenvolvida com **Angular standalone** e **Tailwind CSS v4**.

## Requisitos

- Node.js 22.12 ou superior dentro da linha 22.x (compatível com Angular 21)
- npm 10 ou superior

## Como executar

```bash
npm install --force
npm start
```

A aplicação ficará disponível em `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/bella-cor/browser`.

## Personalização antes de publicar

Edite `src/app/site-config.ts` e informe os dados oficiais da Bella Cor:

- `bookingPortalUrl`: portal oficial de agendamento já utilizado pelas clientes. O valor atual está configurado como `https://bellacor.cgestor.com.br/entrar`.
- `whatsappNumber`: número com país + DDD + telefone, somente dígitos (ex.: `5521999999999`). Quando preenchido, exibe o atalho para WhatsApp.
- `instagramUrl`: endereço completo do Instagram (opcional).
- `address`: endereço ou região de atendimento (opcional).

A logo vetorial enviada foi preservada em `src/assets/images/bella-cor-logo.svg`.

As fotos da página são imagens ilustrativas hospedadas no Unsplash. Para representar a identidade real do espaço, substitua-as por fotografias próprias do estúdio, dos ambientes e dos serviços. Os caminhos das imagens ficam no arquivo `src/app/app.component.html`.

## Estrutura

```text
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── site-config.ts
├── assets/
│   └── images/
│       └── bella-cor-logo.svg
├── index.html
├── main.ts
└── styles.css
```

## Observações

- Todos os botões de agendamento direcionam para o portal oficial da Bella Cor em uma nova aba.
- O site institucional não duplica o processo de agendamento nem armazena dados das clientes.
- Não há backend ou banco de dados nesta entrega.
- Serviços, textos, fotografias e dados de contato devem ser ajustados conforme os atendimentos realmente oferecidos pela Bella Cor.
