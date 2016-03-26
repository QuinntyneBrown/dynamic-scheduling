using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IEquipmentTypeService
    {
        EquipmentTypeAddOrUpdateResponseDto AddOrUpdate(EquipmentTypeAddOrUpdateRequestDto request);
        ICollection<EquipmentTypeDto> Get();
        EquipmentTypeDto GetById(int id);
        dynamic Remove(int id);
    }
}
