import React from 'react'
import { Input, Img, Form, Label, Button, Select, Divider, LogOut } from './styles'
import { AvatarOptions } from './AvatarOptions'
export const MyAccountComponent = ({
  data,
  inputs,
  onSubmit,
  selectAvatar,
  avatar,
  logout
}) => (
  <React.Fragment>
    <Form onSubmit={onSubmit}>
      <h2>Bienvenid@ a tu cuenta {data.first_name}</h2>
      <Img src={avatar || data._links.avatar.href} />
      <AvatarOptions select={selectAvatar} />
      <Label>Nombre</Label>
      <Input
        id='firstName'
        placeholder={data.first_name}
        {...inputs.name}
      />
      <Label>Apellido</Label>
      <Input
        id='lastName'
        placeholder={data.last_name}
        {...inputs.lastName}
      />
      <Divider>
        <div>
          <Label>Telefono</Label>
          <Input
            id='phone'
            placeholder={data.phone}
            {...inputs.phone}
          />
        </div>
        <div>
          <Label>Genero</Label>
          <Select
            type='select'
            id='gender'
            placeholder={data.gender}
            {...inputs.gender}
          >
            <option value='male'>male</option>
            <option value='female'>female</option>
          </Select>
        </div>
      </Divider>
      <Button>Editar</Button>
      <LogOut onClick={logout}>Salir</LogOut>
    </Form>

  </React.Fragment>
)
