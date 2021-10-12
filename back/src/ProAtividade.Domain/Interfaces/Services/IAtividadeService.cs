using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AdicionarAtividade(Atividade model);
        Task<Atividade> AtualizarAtividade(Atividade model);

        Task<bool> DeletarAtividade(int atividadeId);
        Task<bool> ConcluirAtividade(Atividade model);

        Task<Atividade[]> PegarTodasAtividadesAsync();
        Task<Atividade> PegarAtividadePorIdAsync(int atividadeId);
    }
}