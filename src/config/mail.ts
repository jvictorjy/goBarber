interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'suporte@solutionlife.com.br',
      name: 'Suporte da SolutionLife',
    },
  },
} as IMailConfig;
