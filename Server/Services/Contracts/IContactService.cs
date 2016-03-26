using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IContactService
    {
        ContactAddOrUpdateResponseDto AddOrUpdate(ContactAddOrUpdateRequestDto request);
        ICollection<ContactDto> Get();
        ContactDto GetById(int id);
        dynamic Remove(int id);
    }
}
