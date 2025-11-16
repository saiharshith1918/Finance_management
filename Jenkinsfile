pipeline {
  agent any

  environment {
    DOCKERHUB = credentials('dockerhub-pass')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/saiharshith1918/Finance_management.git'
      }
    }

stage('Build Docker Image') {
  steps {
    sh 'docker build --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZGFybGluZy1wZWxpY2FuLTM2LmNsZXJrLmFjY291bnRzLmRldiQ -t harshith1918/finance-app:latest .'
  }
}


    stage('Login to DockerHub') {
      steps {
        sh 'echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USR --password-stdin'
      }
    }

    stage('Push Docker Image') {
      steps {
        sh 'docker push harshith1918/finance-app:latest'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f deployment.yaml'
      }
    }
  }
}
