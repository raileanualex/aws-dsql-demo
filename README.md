# AWS DSQL Demo

This repository demonstrates how to build a serverless application using Amazon DSQL (Database Service Query Language) with AWS CDK, TypeScript, and TypeORM. The demo includes a simple game generator API that showcases the integration between Lambda functions and DSQL.

## 🚀 Features

- Serverless architecture using AWS Lambda and API Gateway
- Fully managed PostgreSQL-compatible database with Amazon DSQL
- Infrastructure as Code using AWS CDK
- Type-safe database operations with TypeORM
- Secure database authentication using AWS DSQL Signer

## 📋 Prerequisites

- Node.js (v14 or later)
- AWS CLI configured with appropriate credentials
- AWS CDK CLI installed (`npm install -g aws-cdk`)
- TypeScript knowledge
- Basic understanding of AWS services

## 🛠️ Project Structure

```
.
├── infra/                  # Infrastructure code (CDK)
│   ├── modules/           # Stack modules
│   │   ├── ServiceStack.ts
│   │   ├── StorageStack.ts
│   │   ├── FunctionsStack.ts
│   │   └── RestAPIStack.ts
│   └── main.ts            # CDK app entry point
├── service/               # Lambda function code
│   └── generate-game/     # Game generator service
│       ├── DatabaseService.ts
│       ├── Game.ts
│       ├── GameGenerator.ts
│       └── Handler.ts
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aws-dsql-demo.git
   cd aws-dsql-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Bootstrap CDK (if you haven't already)**
   ```bash
   npm run infra:bootstrap
   ```

4. **Deploy the stack**
   ```bash
   npm run infra:deploy
   ```

## 🔧 Available Scripts

- `npm run lint` - Run ESLint on the project
- `npm run infra:deploy` - Deploy the CDK stack
- `npm run infra:bootstrap` - Bootstrap CDK environment
- `npm run local-deploy` - Deploy stack locally (for development)
- `npm run local-synth` - Synthesize CloudFormation template locally
- `npm run local-bootstrap` - Bootstrap local CDK environment

## 🏗️ Infrastructure Components

The project consists of several AWS CDK stacks:

- **ServiceStack**: Main stack that orchestrates all other stacks
- **StorageStack**: Manages DSQL cluster and related resources
- **FunctionsStack**: Contains Lambda function definitions
- **RestAPIStack**: Handles API Gateway configuration

## 📝 Environment Variables

The following environment variables are required:

- `DSQL_ENDPOINT` - DSQL cluster endpoint
- `AWS_REGION` - AWS region for deployment (defaults to eu-west-2)

## 🔐 Security

- DSQL authentication is handled securely using `@aws-sdk/dsql-signer`
- All database connections use SSL/TLS encryption
- IAM roles and policies are configured with least privilege access

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [Amazon DSQL Documentation](https://docs.aws.amazon.com/dsql)
- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk)
- [TypeORM Documentation](https://typeorm.io/)

## ⚠️ Important Notes

- This is a demo project and may need additional security considerations for production use
- Make sure to properly configure your AWS credentials before deployment
- Monitor your AWS usage to avoid unexpected charges
