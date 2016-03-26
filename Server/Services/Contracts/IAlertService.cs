using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAlertService
    {
        AlertAddOrUpdateResponseDto AddOrUpdate(AlertAddOrUpdateRequestDto request);
        ICollection<AlertDto> Get();
        AlertDto GetById(int id);
        dynamic Remove(int id);
    }
}
