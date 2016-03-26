using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IInventoryService
    {
        InventoryAddOrUpdateResponseDto AddOrUpdate(InventoryAddOrUpdateRequestDto request);
        ICollection<InventoryDto> Get();
        InventoryDto GetById(int id);
        dynamic Remove(int id);
    }
}
