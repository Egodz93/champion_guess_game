// Copyright (c) Mysten Labs, Inc.
// Modifications Copyright (c) 2024 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

/// This example demonstrates a basic use of a shared object.
/// Rules:
/// - anyone can create and share a counter
/// - everyone can increment a counter by 1
/// - the owner of the counter can reset it to any value
module heroes_guess_dapp::contract {
  /// A shared counter.
  public struct HeroesGuessDapp has key {
    id: UID,
    owner: address,
    value: u64
  }

  /// Create and share a HeroesGuessDapp object.
  public fun create(ctx: &mut TxContext) {
    transfer::share_object(HeroesGuessDapp {
      id: object::new(ctx),
      owner: ctx.sender(),
      value: 0
    })
  }

  /// Increment a counter by 1.
  public fun increment(counter: &mut HeroesGuessDapp) {
    counter.value = counter.value + 1;
  }

  /// Set value (only runnable by the HeroesGuessDapp owner)
  public fun set_value(counter: &mut HeroesGuessDapp, value: u64, ctx: &TxContext) {
    assert!(counter.owner == ctx.sender(), 0);
    counter.value = value;
  }
}

