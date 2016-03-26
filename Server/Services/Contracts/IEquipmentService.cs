using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IEquipmentService
    {
        EquipmentAddOrUpdateResponseDto AddOrUpdate(EquipmentAddOrUpdateRequestDto request);
        ICollection<EquipmentDto> Get();
        EquipmentDto GetById(int id);
        dynamic Remove(int id);
    }
}
